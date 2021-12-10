const listIngredients = ["flour", "sugar", "eggs", "butter", "chocolate"];
let ingredient = listIngredients.includes("chocolate");

if (ingredient) {
    console.log("We are going to make a chocolate cake");
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}