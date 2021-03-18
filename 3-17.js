function longestPeak(array) {	
    let longestPeak = 0;

    let i = 1;

    while (i < array.length - 1) {
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];

        if (!isPeak) {
            i++;
            continue;
        }

        //expand left of current peak;
        let left = i - 2;
        while (left >= 0 && array[left] < array[left + 1]) {
            left--;
        }

        //expand right of current peak
        let right = i + 2;
        while (right < array.length && array[right] < array[right - 1]) {
            right++;
        }


        const currPeak = right - left - 1; // - 1 because not inclusive
        longestPeak = Math.max(longestPeak, currPeak);
        //set i to right index of curr peak, because anything in between can not be a longer peak
        i = right;
    }

    return longestPeak;
}