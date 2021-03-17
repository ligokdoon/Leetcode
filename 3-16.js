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

