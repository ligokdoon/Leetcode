//aA hackerrank 02/22

function funWithAnagrams(text) {
    // Write your code here
    const map = new Map();

    text.forEach((string, index) => {
        let key = string.split('').sort().join('');
        console.log(key);
        if (map.has(key)) {
            text[index] = undefined;
        } else {
            map.set(key, true);
        }
    })

    return text.filter(string => string !== undefined).sort();
}

function maximumOccurringCharacter(text) {
    // Write your code here
    let result = text[0];

    const charCount = {};

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        charCount[char] ? charCount[char] += 1 : charCount[char] = 1;
    }

    const keys = Object.keys(charCount)

    keys.forEach(key => {
        if (charCount[key] > charCount[result]) {
            result = key;
        }
    })

    return result;
}

function finalInstances(instances, averageUtil) {
    // Write your code here
    for (let i = 0; i < averageUtil.length; i++) {
        let util = averageUtil[i];

        if (util < 25 && instances > 1) {
            instances = Math.ceil(instances / 2);
            i += 10;
        }

        if (util > 60 && (instances * 2 <= 2 * 10 ** 8)) {
            instances = instances * 2;
            i += 10;
        }
    }

    return instances;
}

function countPairs(numbers, k) {
    // Write your code here
    const set = new Set();
    const validPairs = {};

    numbers.forEach(num => set.add(num));

    numbers.forEach(num => {
        if (set.has(num - k)) {
            validPairs[[num - k, k]] = true;
        }
    })

    return Object.keys(validPairs).length
}
