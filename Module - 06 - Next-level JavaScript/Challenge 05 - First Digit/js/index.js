function firstDigit(str) {
    const strNum = ["0","1","2","3","4","5","6","7","8","9"];
    let string = str.split("");
    for (const char of string){
        if (strNum.includes(char)){
            return char;
        }
    }
}

const str = "var_1Int2";
console.log(firstDigit(str))