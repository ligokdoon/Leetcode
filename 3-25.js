function convertQueryToMap(query) {
    const map = {};

    const pairs = query.split('&');

    for (let i = 0; i < pairs.length; i++) {
        let keys = pairs[i].split('=')[0].split('.');
        let value = pairs[i].split('=')[1];

        if (keys.length < 2) {
            let key = keys[0];
            map[key] = value;
        }

        let firstKey = keys[0];

        map[firstKey] = makeNestedObject(keys.slice(1), value);
    }

    return map;
}

const makeNestedObject = (keys, value) => {

    if (keys.length < 2) {
        let key = keys[0];
        map[key] = value;
        return map;
    }

    let currKey = keys[0];

    if (map[currKey]) {
        let nextKey = keys[1];
        map[currKey] = nextKey;
    } else {
        map[currKey] = makeNestedObject(keys.slice(1), value);
    }

}


console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'));