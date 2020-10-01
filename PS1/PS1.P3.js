const callOn = (string, func) => {
    return func(string);
};

let expression1 = callOn("supercalifragilisticexpialidocious", (string) => string.split(/(?=c)/g));
let expression2 = callOn("supercalifragilisticexpialidocious", (string) => {
    return {
        originalString: string,
        numberReplaced: string.split("a").length - 1,
        modifiedString: string.replace("a", "A"),
        length: string.length
    };
});

console.log(expression1);
console.log(expression2);
console.table(expression2);

module.exports = {callOn};