// Select a block of code in your editor, right-click, and then select "Copilot: Explain" to get an explanation of the code.
// Write a Program to Find the largest number in an array in JavaScript.
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    
    let largest = arr[0]; // Assume the first element is the largest
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if a larger number is found
        }
    }
    
    return largest; // Return the largest number found
}