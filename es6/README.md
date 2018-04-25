# Stryker ES6 Demo
- ES6
- Babel
- Jest

Before running example
----------------------
```bash
  cd es6
  yarn
```

Simple example (src/inRange.js)
-------------------------------
```js
  // Check if number is in range
  function inRange({ number, low, high }) {
    return number >= low && number <= high;
  }

  // The tests (tests/inRange.test.js)
  it('should return true if in range', () => {
    expect(inRange({ number: 5, low: 0, high: 10 })).toEqual(true);
  });
  it('should return false if not in range', () => {
    expect(inRange({ number: 1, low: 5, high: 10 })).toEqual(false);
  });
```
Run tests: `npm test` => All tests pass   
Run coverage: `npm run coverage` => 100% coverage

Is this good enough?
--------------------
Not really..   
1. Run mutation testing: `npm run mutate` => 2 Mutants survived   
2. We do not assert on the boundary values, meaning that the test suite would still pass
if someone would change >= to >

Add more some more test cases
-----------------------------
Uncomment the test cases in tests/inRange.test.js
```ts
  it('should include low value in range', () => {
    expect(inRange({ number: 5, low: 5, high: 10 })).toEqual(true);
  });
  it('should include high value in range', () => {
    expect(inRange({ number: 10, low: 0, high: 10 })).toEqual(true);
  });
```
Run mutation again: `npm run mutate` => All mutants where killed
