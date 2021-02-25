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
function billFor(month, activeSubscription, users) {
    // your code here!
    if (!activeSubscription || !users.length) return 0;

    month = month + '-01';
    let date = new Date(month);
    let total = 0;

    const dailyRate = activeSubscription.monthlyPriceInDollars / (lastDayOfMonth(date).getDate() - firstDayOfMonth(date).getDate())

    while (date.getTime() <= lastDayOfMonth(date).getTime()) {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];

            if (wasActiveThisDate(date, user)) {
                total += dailyRate;
            }
        }

        date = nextDay(date);
    }

    return parseInt(total.toFixed(2), 10);
}

function wasActiveThisDate(date, user) {
    if ((user.activatedOn.getTime() <= date.getTime() && user.deactivatedOn === null) || (user.activatedOn.getTime() <= date.getTime() && user.deactivatedOn.getTime() >= date.getTime())) {
        return true;
    } else {
        return false;
    }

}

/*******************
* Helper functions *
*******************/

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)

  Input type: Date
  Output type: Date
**/
function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
  Takes a Date object and returns a Date which is the last day
  of that month. For example:

  lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)

  Input type: Date
  Output type: Date
**/
function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
  Takes a Date object and returns a Date which is the next day.
  For example:

  nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
  nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)

  Input type: Date
  Output type: Date
**/
function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}