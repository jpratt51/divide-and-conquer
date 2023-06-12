// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let numZeroes;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if (middleVal === 1) {
            leftIdx = middleIdx + 1;
            numZeroes = arr.length - leftIdx;
        } else if (middleVal === 0) {
            rightIdx = middleIdx - 1;
            numZeroes = arr.length - 1 - rightIdx;
        } else {
            return arr.length - middleIdx;
        }
    }
    return numZeroes;
}

// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(arr, val) {
    let arrCopy = arr;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let res = [];

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arrCopy[midIdx];
        if (midVal < val) {
            leftIdx = midIdx + 1;
        } else if (midVal > val) {
            rightIdx = midIdx - 1;
        } else {
            res.push(arrCopy[midIdx]);
            arrCopy.splice(midIdx, 1);
            rightIdx--;
        }
    }
    return res.length === 0 ? -1 : res.length;
}

// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let joinedArr, leftArrLength, rightArrLength;
    let initMidIdx = Math.floor((leftIdx + rightIdx) / 2);
    let leftArr = arr.slice(0, initMidIdx + 1);
    let rightArr = arr.slice(initMidIdx + 1);
    leftArrLength = leftArr.length;
    rightArrLength = rightArr.length;
    joinedArr = rightArr.concat(leftArr);
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = joinedArr[midIdx];
        if (midVal < val) {
            leftIdx = midIdx + 1;
        } else if (midVal > val) {
            rightIdx = midIdx - 1;
        } else {
            if (midIdx > initMidIdx) {
                return midIdx - 1 - initMidIdx;
            } else if (midIdx < initMidIdx) {
                return midIdx + 1 + initMidIdx;
            } else {
                return midIdx - 1;
            }
        }
    }
    return -1;
}

// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

function findRotationCount(arr) {
    let arrCopy = arr;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let rotatedNums = [];
    let finished;
    while (!finished) {
        if (arrCopy[leftIdx] > arrCopy[rightIdx]) {
            rotatedNums.push(arr[leftIdx]);
            arrCopy.shift();
            rightIdx--;
        } else if (arrCopy[leftIdx] < arrCopy[rightIdx]) {
            finished = true;
            return rotatedNums.length;
        } else if (
            arrCopy[leftIdx] === arrCopy[rightIdx] &&
            arrCopy.length > 1
        ) {
            rotatedNums.push(arr[leftIdx]);
            arrCopy.shift();
        } else {
            return rotatedNums.length;
        }
    }
    return rotatedNums.length;
}

// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];
        if (midVal > val) {
            rightIdx = midIdx - 1;
        } else if (midVal < val) {
            if (midIdx === rightIdx) {
                return arr[midIdx];
            }
            leftIdx = midIdx + 1;
        } else {
            if (midVal === val && leftIdx - rightIdx > 1) {
                leftIdx = midIdx + 1;
            } else {
                return arr[midIdx];
            }
        }
    }
    return -1;
}

// function binarySearch(arr, val) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     while (leftIdx <= rightIdx) {
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//         let middleVal = arr[middleIdx];
//         if (middleVal < val) {
//             leftIdx = middleIdx + 1;
//         } else if (middleVal > val) {
//             rightIdx = middleIdx - 1;
//         } else {
//             console.log(middleIdx);
//             return middleIdx;
//         }
//     }
//     console.log(-1);
//     return -1;
// }

// let testArr = [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20];

// binarySearch(testArr, 20);
