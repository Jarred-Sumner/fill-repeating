const Benchmark = require("benchmark");
const { fillRepeatingUInt8, fillRepeating } = require("./fillRepeating-cjs");

const suite = new Benchmark.Suite();

const array = [8, 6, 7, 5, 3, 0, 9];
const repeatCount = array.length;
array.length = 100000 + (100000 % repeatCount);
fillRepeating(array, 0);
const arrayToUse = new Uint8Array(array);

suite
  .add("fill repeatedly using for loop", function () {
    for (let i = repeatCount; i < arrayToUse.length; ) {
      arrayToUse[i] = 8;
      arrayToUse[i++] = 6;
      arrayToUse[i++] = 7;
      arrayToUse[i++] = 5;
      arrayToUse[i++] = 3;
      arrayToUse[i++] = 0;
      arrayToUse[i++] = 9;
    }
  })
  .add("fill-repeating", function () {
    fillRepeating(arrayToUse, 0, repeatCount);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: false });
