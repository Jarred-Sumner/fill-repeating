# fill-repeating

This is sort of like `Array.prototype.fill` but supports multiple values. Its the fastest way to fill an Array or TypedArray with multiple values repeatedly.

You probably want to use this with a TypedArray instead of a native array. The bigger the array, the bigger the performance win.

Note that this won't set the initial values, you must copy them:
```ts
const array = [8, 6, 7, 5, 3, 0, 9];
const repeatLength = array.length;
array.length = 100;
// 0 is the start
// repeatLength is the end
fillRepeating(array, 0, repeatLength);
```

`array` becomes:
```ts
 [
    8, 6, 7, 5, 3, 0, 9, 8, 6, 7, 5, 3,
    0, 9, 8, 6, 7, 5, 3, 0, 9, 8, 6, 7,
    5, 3, 0, 9, 8, 6, 7, 5, 3, 0, 9, 8,
    6, 7, 5, 3, 0, 9, 8, 6, 7, 5, 3, 0,
    9, 8, 6, 7, 5, 3, 0, 9, 8, 6, 7, 5,
    3, 0, 9, 8, 6, 7, 5, 3, 0, 9, 8, 6,
    7, 5, 3, 0, 9, 8, 6, 7, 5, 3, 0, 9,
    8, 6, 7, 5, 3, 0, 9, 8, 6, 7, 5, 3,
    0, 9, 8, 6
  ]
```

## Install

There are no dependencies (only dev dependencies) and types, esm build, cjs build, and iife build are included.

```bash
yarn add fill-repeating
```

### Benchmark

With a typed array of length 1,000 its about **2.4x faster**:
```bash
fill repeatedly using for loop x 2,249,395 ops/sec ±1.28% (87 runs sampled)
fill-repeating x 5,473,125 ops/sec ±0.80% (85 runs sampled)
Fastest is fill-repeating
```

With a typed array of length 10,000 its about **12x faster**:
```bash
fill repeatedly using for loop x 256,877 ops/sec ±0.88% (90 runs sampled)
fill-repeating x 3,250,653 ops/sec ±0.99% (92 runs sampled)
Fastest is fill-repeating
```

With a typed array of length 100,000 its about **18x faster**:
```bash
fill repeatedly using for loop x 26,012 ops/sec ±1.33% (86 runs sampled)
fill-repeating x 478,939 ops/sec ±1.70% (86 runs sampled)
Fastest is fill-repeating
```

Run it yourself: `node benchmark.js`

It's faster than manually looping through the entire array because it repeatedly copies memory instead of assigning each value.

To ensure performance, make sure you pass the same type of array to this method (otherwise v8 will deopt it). For convience, there are versions of this function built for every array type.

Credit goes to the author of this Stack Overflow answer for the original implementation: https://stackoverflow.com/questions/46313130/more-efficient-way-to-copy-repeating-sequence-into-typedarray