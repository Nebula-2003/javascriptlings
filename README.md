# JavaScriptlings

Welcome to **JavaScriptlings**! This project is an interactive learning tool designed to help you master basic JavaScript concepts through hands-on exercises. Inspired by the popular Rustlings project, JavaScriptlings provides a guided experience where you solve coding challenges and receive immediate feedback.

## How It Works

JavaScriptlings uses a collection of small JavaScript exercises located in the `tasks/` directory, each paired with its own set of tests in the `tests/` directory. Your goal is to make the tests for each exercise pass by writing or correcting the JavaScript code in the corresponding task file.

The tool guides you through the exercises, indicating which ones are ready to be attempted, which you've successfully completed, and which still need work.

## Features

*   **Interactive Learning:** Solve coding challenges directly in your editor.
*   **Clear Feedback:** Get instant feedback on whether your solution passes or fails.
*   **Progress Tracking:** Easily see which exercises you've completed, which are pending, and which you're currently working on.
*   **Real-world Testing:** Uses `vitest`, a fast and modern testing framework, to validate your solutions.

## Getting Started

To get started with JavaScriptlings, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website: [nodejs.org](https://nodejs.org/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd javascriptlings
    ```

    *(Replace `<repository-url>` with the actual URL of this repository.)*

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running JavaScriptlings

Once installed, you can run the JavaScriptlings tool from your terminal:

```bash
npm run javascriptlings
```

This command will scan all exercises and report their status.

## How to Use

When you run `npm run javascriptlings`, you'll see a list of exercises with one of the following statuses:

*   **SKIPPED:** This exercise is not yet active. To start working on it, you need to **uncomment the test block(s)** in its corresponding test file located in the `tests/` directory. The tool will provide a hint with the exact file path.

*   **ATTEMPTING:** This exercise is active, and the tool is running its tests.

    *   If the tests pass, the exercise will be marked as **PASS**.
    *   If the tests fail, the exercise will be marked as **FAIL**, and you'll see the test output to help you debug your solution.

### Your Workflow

1.  **Choose an Exercise:** The `javascriptlings` tool will guide you to the next available exercise.
2.  **Enable the Exercise:** Navigate to the suggested test file (e.g., `tests/basics/1.even-numbers.test.js`) and uncomment the `describe` or `it` blocks within it. Save the file.
3.  **Solve the Task:** Open the corresponding JavaScript task file in the `tasks/` directory (e.g., `tasks/1.basics/1.even-numbers.js`). Implement your solution to the problem described in the comments.
4.  **Check Your Work:** Run `npm run javascriptlings` again to see if your solution passes the tests.
5.  **Repeat:** Continue this cycle of enabling, solving, and checking until all exercises are marked as `PASS`!

## Project Structure (Brief)

*   `tasks/`: Contains the JavaScript files where you'll write your solutions.
*   `tests/`: Contains the test files that validate your solutions.
*   `src/`: Contains the `runner.js` script that powers the JavaScriptlings CLI.

## Contributing

Contributions are welcome! If you have ideas for new exercises, improvements to the tool, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE). *(You might want to create a `LICENSE` file in your repository if you haven't already.)*
