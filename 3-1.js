// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non - space characters.The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.The returned string should only have a single space separating the words.Do not include any extra spaces.

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Example 4:
// Input: s = "  Bob    Loves  Alice   "
// Output: "Alice Loves Bob"

// Example 5:
// Input: s = "Alice does not even like bob"
// Output: "bob like even not does Alice"

var reverseWords = function (s) {
    let pointer1;
    let pointer2;

    result = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char !== " ") {
            if (pointer1 === undefined) {
                pointer1 = i;
                pointer2 = i + 1;
            } else {
                pointer2 = i + 1;
            }
        } 
        
        if (char === " " || i === s.length - 1) {
            if (pointer1 !== undefined) {
                let word = s.substring(pointer1, pointer2);
  
                result.push(word);
                pointer1 = undefined;
                pointer2 = undefined;
            }
        }
        
    }

    return result.reverse().join(' ');
};


// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index.If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1, 2, 1, 3, 5, 6, 4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

// var findPeakElement = function (nums) {
//     if (nums.length < 2) return 0;

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (num > nums[i - 1] && num > nums[i + 1]) {
//             return i;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];

//         if (!nums[i - 1] && num > nums[i + 1]) return i;
//         if (!nums[i + 1] && num > nums[i - 1]) return i;
//     }
// };

var findPeakElement = function (nums) {
    if (nums.length < 2) return 0;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }
    return left;
};

console.log(findPeakElement([1,3,5,3,4,1,2]))