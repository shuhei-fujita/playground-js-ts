const sum = require('../functions/expression_function.js');

// 一つのtest
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// 複数の値を一度に実行するtest
test.each([
    [1, 2, 3],
    [1, 20, 21],
    [1, 200, 201],
])('adds %i + %i to equal %i', (a, b, result) => {
    expect(sum(a,b)).toBe(result);
});
