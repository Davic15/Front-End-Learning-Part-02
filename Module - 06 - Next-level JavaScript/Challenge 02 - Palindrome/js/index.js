function caseInsensitivePalindrome(str) {
    let string = str.split("").reverse().join("").toLowerCase();

    if (string === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}


const str = 'AaBaa';
console.log(caseInsensitivePalindrome(str));