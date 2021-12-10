function arrayReplace (array, elemToReplace, substitutionElem) {
    for(let i = 0; i < array.length; i++){
        if (array[i] === elemToReplace) {
            array[i] = substitutionElem;
        }
    }
    return array;
}

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;
console.log(arrayReplace(array, elemToReplace, substitutionElem));