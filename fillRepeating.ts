export function fillRepeating(
  dstBuffer: number[] | Int8Array | Int16Array | Int32Array | Uint8ClampedArray | Uint32Array | Uint32Array | Uint32Array | Float32Array | Float64Array | BigUint64Array | BigInt64Array,
  start: number,
  end: number
) {
  let len = dstBuffer.length, // important: use indices length, not byte-length
    sLen = end - start,
    p = sLen; // set initial position = source sequence length

  // step 2: copy existing data doubling segment length per iteration
  while (p < len) {
    if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
    dstBuffer.copyWithin(p, start, sLen); // internal copy
    p += sLen; // add current length to offset
    sLen <<= 1; // double length for next segment
  }
}
export function fillRepeatingInt8(
        dstBuffer: Int8Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingInt16(
        dstBuffer: Int16Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingInt32(
        dstBuffer: Int32Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingUint8Clamped(
        dstBuffer: Uint8ClampedArray,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingUInt8(
        dstBuffer: Uint32Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingUInt16(
        dstBuffer: Uint32Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingUInt32(
        dstBuffer: Uint32Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingFloat32(
        dstBuffer: Float32Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingFloat64(
        dstBuffer: Float64Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingBigUint64(
        dstBuffer: BigUint64Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    export function fillRepeatingBigInt64(
        dstBuffer: BigInt64Array,
        start: number,
        end: number
      ) {
        let len = dstBuffer.length, // important: use indices length, not byte-length
          sLen = end - start,
          p = sLen; // set initial position = source sequence length

        // step 2: copy existing data doubling segment length per iteration
        while (p < len) {
          if (p + sLen > len) sLen = len - p; // if not power of 2, truncate last segment
          dstBuffer.copyWithin(p, start, sLen); // internal copy
          p += sLen; // add current length to offset
          sLen <<= 1; // double length for next segment
        }
      }
    