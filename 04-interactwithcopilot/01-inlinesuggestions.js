// sum of 2 numbers with performance improved version
// This function calculates the sum of two numbers
// and returns the result.
export default async function sum(a, b) {
  // Ensure that both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }

  // Calculate the sum
  const result = a + b;

  // Return the result
  return result;
}