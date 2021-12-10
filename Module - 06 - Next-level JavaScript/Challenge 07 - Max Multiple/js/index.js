function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    return bound - remainder
}
const divisor = 3;
const bound = 10;
const result = maxMultiple(divisor, bound);
console.log("result: ", result);