function encloseInBrackets(str) {
    const solutionOne = "(" + str +")";
    const solutionTwo = `(${str})`; 
    const solutionTrhee = "(".concat(str, ")")
    return solutionOne;
}

const str = "Yo";
console.log(encloseInBrackets(str));