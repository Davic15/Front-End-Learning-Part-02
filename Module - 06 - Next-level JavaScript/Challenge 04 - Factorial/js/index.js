function factorialNumber(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

const num = 5;
console.log(factorialNumber(num))