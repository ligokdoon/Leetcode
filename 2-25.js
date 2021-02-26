// Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

const generateParenthesis = (n, open = 0, close = 0, ans = [], current = '') => {
    if (current.length === n * 2) result.push(current);
    if (openCount < n) generateParenthesis(n, openCount + 1, closeCount, result, current + '(');
    if (openCount > closeCount) generateParenthesis(n, openCount, closeCount + 1, result, current + ')');

    return result;
};