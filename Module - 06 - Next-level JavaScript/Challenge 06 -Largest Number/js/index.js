function largestNumber(num) {
    let placeholder = "";
    for (let i = 0; i < num; i++) {
        placeholder = placeholder.concat("9")
    }

    /*
        Another solution
        const placeholder = "9".repeat(num);
    */
    return parseInt(placeholder)
}

const num = 2;
const result = largestNumber(num);
console.log("Result: ", result);