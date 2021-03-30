function generateDocument(characters, document) {
    // Write your code here.
    const dictionary = {};

    for (let i = 0; i < characters.length; i++) {
        let char = characters[i];
        if (dictionary[char]) {
            dictionary[char] += 1;
        } else {
            dictionary[char] = 1;
        }
    }

    for (let j = 0; j < document.length; j++) {
        let char = document[j];
        if (!dictionary[char]) {
            return false;
        } else {
            dictionary[char] -= 1;
        }

    }

    return true;
}
