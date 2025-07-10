/**
 * Waits for the first promise in an array to resolve.
 * @param {Promise[]} promises An array of promises.
 * @returns {Promise<any>} A promise that resolves with the result of the first promise to resolve.
 * @example waitAny([new Promise(res => setTimeout(() => res(1), 200)), new Promise(res => setTimeout(() => res(2), 100))]) // Resolves with 2
 */
export function waitAny(promises) {

}
