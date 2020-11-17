var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
__export(exports, {
  fillRepeating: () => fillRepeating,
  fillRepeatingBigInt64: () => fillRepeatingBigInt64,
  fillRepeatingBigUint64: () => fillRepeatingBigUint64,
  fillRepeatingFloat32: () => fillRepeatingFloat32,
  fillRepeatingFloat64: () => fillRepeatingFloat64,
  fillRepeatingInt16: () => fillRepeatingInt16,
  fillRepeatingInt32: () => fillRepeatingInt32,
  fillRepeatingInt8: () => fillRepeatingInt8,
  fillRepeatingUInt16: () => fillRepeatingUInt16,
  fillRepeatingUInt32: () => fillRepeatingUInt32,
  fillRepeatingUInt8: () => fillRepeatingUInt8,
  fillRepeatingUint8Clamped: () => fillRepeatingUint8Clamped
});
function fillRepeating(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingInt8(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingInt16(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingInt32(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingUint8Clamped(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingUInt8(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingUInt16(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingUInt32(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingFloat32(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingFloat64(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingBigUint64(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
function fillRepeatingBigInt64(dstBuffer, start, end) {
  let len = dstBuffer.length, sLen = end - start, p = sLen;
  while (p < len) {
    if (p + sLen > len)
      sLen = len - p;
    dstBuffer.copyWithin(p, start, sLen);
    p += sLen;
    sLen <<= 1;
  }
}
