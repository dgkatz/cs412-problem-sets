const reverseString = (string) => {
    return string.split("").reverse().join("");
};

console.log(reverseString("Hello"));

module.exports = {reverseString};