var longestPalindrome = function (s) {
    const subStringsByLength = subStrings(s).sort((a, b) => a.length - b.length);

    return subStringsByLength[subStringsByLength.length - 1];


};

const subStrings = s => {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let subString = s.slice(i, j + 1);
            if (subString === subString.split('').reverse().join('')) {
                result.push(subString)
            }
        }
    }

    return result;
}