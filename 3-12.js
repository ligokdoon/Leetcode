//Naive O(n^2) solution
function arrayOfProducts(array) {
    // Write your code here.
    return array.map((ele, i) => {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) product *= array[j];
        }
        return product;
    })
}