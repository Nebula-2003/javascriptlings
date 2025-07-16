/**
 * Pipes multiple functions from left to right.
 * @param {...Function} fns The functions to pipe.
 * @returns {Function} A new function that is the piped composition of the input functions.
 * @example
 * const add5 = (x) => x + 5;
 * const multiplyBy2 = (x) => x * 2;
 * const piped = pipeFunctions(add5, multiplyBy2);
 * piped(10) // 30
 */
export function pipeFunctions(...fns) {

}
