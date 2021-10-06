
let text = "No-one ever knew that a very angry monster lived underneath the old, iron bridge."
let words = text.toLowerCase().split(" ");
let message = "I Love Man U"
let noSpaces = message.replace(/ /g, "").toLowerCase();


// const message = () => {
//     let find = message.toLowerCase().split("");
//     console.log(find)
// }
// message();

const findFirst = () => {
    for (i = 0; i < words.length; i++) {
        let firstLetter = words[i];
        let firstList = firstLetter.charAt(0).toLowerCase();
        console.log(firstList)
        // return firstList;
    }
}
findFirst()

const findLast = () => {
    for (i = 0; i < words.length; i++) {
        let lastLetter = words[i];
        let lastClean = lastLetter.replace(".", "")
        let clean = lastClean.replace(",", "")
        let n = clean.length;
        let lastList = lastLetter.charAt(n - 1);
        console.log(lastList);
        // return lastList;
    }
}
findLast()

// const checkMessage = () => {
//     console.log(find.every(elem => .includes(elem)));
// }
// checkMessage();
// const text = () => {
//     console.log(findFirst());
//     console.log(findLast());
// }
// text();


console.log(noSpaces)
console.log(process.argv)


// Need to be able to input the following in the terminal

// Node index.js --message "I Love Man U" --text "No-one ever knew that a very angry monster lived underneath the old, iron bridge. "
//  Give the answer true or false

// console.log(firstList.includes(find))
// console.log(firstLetter)
// const main1 = () => process.argv.includes(message) ? "Found" : "Not Found";
// console.log(main1())
// console.log(find.every(elem => firstList.includes(elem)));
// let messageNoSpaces = message.replaceAll("\\s+", "");
// console.log(words)

module.exports = { text, message };