// Time: O(nlogn), Space: O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    redShirtHeights.sort();
    blueShirtHeights.sort();

    const backRow = redShirtHeights[redShirtHeights.length - 1] > blueShirtHeights[blueShirtHeights.length - 1] ? redShirtHeights : blueShirtHeights;
    const frontRow = backRow === redShirtHeights ? blueShirtHeights : redShirtHeights;

    for (let i = 0; i < backRow.length; i++) {
        if (backRow[i] <= frontRow[i]) return false;
    }

    return true;
}

function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    let result = 0;

    while (n > 0) {
        const coin = denoms.pop();
        while (n - coin > 0) {
            n -= coin;
            result++
        }
    }

    return result;
}


