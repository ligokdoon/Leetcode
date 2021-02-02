const isBalanced = string => {
    const stack = [];
    const dictionary = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if(dictionary[char]) {
            stack.push(char);
        } else {
            const lastOpen = stack[stack.length - 1];
            
            if (dictionary[lastOpen] === char) {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}

