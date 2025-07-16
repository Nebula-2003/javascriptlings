/**
 * Composes multiple functions from right to left.
 * @param {...Function} fns The functions to compose.
 * @returns {Function} A new function that is the composition of the input functions.
 * @example
 * const add5 = (x) => x + 5;
 * const multiplyBy2 = (x) => x * 2;
 * const composed = composeFunctions(multiplyBy2, add5);
 * composed(10) // 30
 */
export function composeFunctions(...fns) {

}
