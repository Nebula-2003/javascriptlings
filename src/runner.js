import { promises as fs } from 'fs';
import path from 'path';
import { exec } from 'child_process';

const TASKS_DIR = path.join(process.cwd(), 'tasks');
const TESTS_DIR = path.join(process.cwd(), 'tests');
const NOT_DONE_COMMENT = '// I AM NOT YET DONE';

async function findTaskFiles() {
    // Using fs.readdir and recursion to find all .js files
    const getFiles = async (dir) => {
        const dirents = await fs.readdir(dir, { withFileTypes: true });
        const files = await Promise.all(dirents.map((dirent) => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        }));
        return Array.prototype.concat(...files);
    };

    const allFiles = await getFiles(TASKS_DIR);
    const relativePaths = allFiles.filter(file => file.endsWith('.js')).map(file => path.relative(TASKS_DIR, file));

    // Custom sort to handle numerical prefixes in file names
    relativePaths.sort((a, b) => {
        const aParts = a.split(path.sep);
        const bParts = b.split(path.sep);

        // Compare by directory first (e.g., 1.basics, 2.control-flow-logic)
        for (let i = 0; i < Math.min(aParts.length, bParts.length) - 1; i++) {
            const aNum = parseInt(aParts[i].split('.')[0]);
            const bNum = parseInt(bParts[i].split('.')[0]);

            if (!isNaN(aNum) && !isNaN(bNum)) {
                if (aNum !== bNum) {
                    return aNum - bNum;
                }
            } else {
                const dirCompare = aParts[i].localeCompare(bParts[i]);
                if (dirCompare !== 0) {
                    return dirCompare;
                }
            }
        }

        // Then compare by file name (e.g., 1.even-numbers, 10.multiply-by-two)
        const aFileName = path.basename(a, '.js');
        const bFileName = path.basename(b, '.js');

        const aFileNum = parseInt(aFileName.split('.')[0]);
        const bFileNum = parseInt(bFileName.split('.')[0]);

        if (!isNaN(aFileNum) && !isNaN(bFileNum)) {
            return aFileNum - bFileNum;
        } else {
            return aFileName.localeCompare(bFileName);
        }
    });

    return relativePaths;
}

async function getExerciseStatus(taskFilePath) {
    try {
        const content = await fs.readFile(taskFilePath, 'utf8');
        if (content.startsWith(NOT_DONE_COMMENT)) {
            return 'SKIPPED';
        }
        return 'ATTEMPTED';
    } catch (error) {
        // If file doesn't exist (e.g., deleted), treat as skipped
        return 'SKIPPED';
    }
}

async function runVitest(testName) {
    return new Promise((resolve) => {
        const command = testName ? `npx vitest run -t "${testName}"` : 'npx vitest run';
        exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
            if (error) {
                const output = stdout + stderr;
                const failMatch = output.match(/FAIL\s+.*$/m);
                if (failMatch) {
                    resolve({ status: 'FAIL', output: failMatch[0] });
                } else {
                    resolve({ status: 'FAIL', output });
                }
            } else {
                resolve({ status: 'PASS', output: stdout });
            }
        });
    });
}

async function runJavaScriptlings() {
    console.log('Running JavaScriptlings...');
    const relativeTaskFiles = await findTaskFiles();
    const exercises = await Promise.all(relativeTaskFiles.map(async (relativeTaskPath) => {
        const fullTaskPath = path.join(TASKS_DIR, relativeTaskPath);
        const status = await getExerciseStatus(fullTaskPath);
        return { relativeTaskPath, fullTaskPath, status };
    }));

    const attemptedExercises = exercises.filter(ex => ex.status === 'ATTEMPTED');
    const testPromises = attemptedExercises.map(async (exercise) => {
        const testFilePath = path.join(TESTS_DIR, exercise.relativeTaskPath.replace(/^[0-9]+\./, '').replace('.js', '.test.js'));
        const testFileContent = await fs.readFile(testFilePath, 'utf8');
        const describeMatch = testFileContent.match(/describe\s*\(\s*['"](.+?)['"]\s*,/);
        const itMatch = testFileContent.match(/it\s*\(\s*['"](.+?)['"]\s*,/);

        if (describeMatch && itMatch) {
            const testName = `${describeMatch[1]} ${itMatch[1]}`;
            const vitestResult = await runVitest(testName);
            return { ...exercise, vitestResult };
        }
        return { ...exercise, vitestResult: { status: 'FAIL', output: 'Could not parse test name.' } };
    });

    const results = await Promise.all(testPromises);
    const firstFailingExercise = results.find(res => res.vitestResult.status === 'FAIL');

    if (firstFailingExercise) {
        const exerciseName = path.basename(firstFailingExercise.relativeTaskPath, '.js');
        console.log(`\n====================================================================`);
        console.log(`Your solution for ${exerciseName} is not correct.`);
        console.log(`Path: ${path.relative(process.cwd(), firstFailingExercise.fullTaskPath)}`);
        console.log(`Please fix the following error:`);
        console.log(firstFailingExercise.vitestResult.output);
        console.log(`====================================================================\n`);
    } else {
        const firstSkippedExercise = exercises.find(ex => ex.status === 'SKIPPED');
        if (firstSkippedExercise) {
            const exerciseName = path.basename(firstSkippedExercise.relativeTaskPath, '.js');
            console.log(`\n====================================================================`);
            console.log(`You're on to the next exercise!`);
            console.log(`Work on: ${exerciseName}`);
            console.log(`Path: ${path.relative(process.cwd(), firstSkippedExercise.fullTaskPath)}`);
            console.log(`Hint: Remove the '${NOT_DONE_COMMENT}' comment from the top of the file to attempt this exercise.`);
            console.log(`====================================================================\n`);
        } else {
            console.log(`\n====================================================================`);
            console.log(`Congratulations! All JavaScriptlings exercises passed!`);
            console.log(`====================================================================\n`);
        }
    }
}

runJavaScriptlings();