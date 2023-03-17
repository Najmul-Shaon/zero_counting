/*
Complete the function called countZeros() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.
*/

function countZeros(binary_num) {
    //Write your code here
    //Don't forget to return
    let sum = 0;
    for (let i = 0; i < binary_num.length; i++) {
        // console.log(binary_num[i]);
        if (binary_num[i] === "0") {
            sum = sum + 1;
        }
    }
    return sum;
}
console.log(countZeros("00100"));