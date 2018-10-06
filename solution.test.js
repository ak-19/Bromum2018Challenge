const solution = require('./solution');

test('Given 3, 2 B = [1, 2, 0, 1, 1, 0, 0, 1] and B = [0, 3, 0, 2, 0, 3, 0, 0], your function should return 4', () => {
  expect(solution(3, 2, [1, 2, 0, 1, 1, 0, 0, 1], [0, 3, 0, 2, 0, 3, 0, 0])).toBe(4);
});

test('Given 2, 2 B = [0, 1] and B = [5,5], your function should return -1', () => {
    expect(solution(2, 2, [0, 1], [5,5])).toBe(-1);
});
