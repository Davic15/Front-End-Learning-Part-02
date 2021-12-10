function caseInsensitivePalindrome(str) {
    let string = str.split("").reverse().join("").toLowerCase();

    return string === str.toLowerCase();
}


const str = 'AaBaa';
console.log(caseInsensitivePalindrome(str));