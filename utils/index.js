
let text = "Nobody ever knew that a very, angry monster lived underneath the old, iron bridge.";
let words = text.toLowerCase().split(" ");
let fLetters = "";
let lLetters = "";

let message = "I Love Man U"
let noSpaces = message.replace(/ /g, "").toLowerCase();
let noPunc = noSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

const findFirst = () => {
    for (i = 0; i < words.length; i++) {
        let firstLetter = words[i];
        let firstList = firstLetter.charAt(0).toLowerCase();
        fLetters = fLetters + firstList;
        // return firstList;
    }
};
findFirst()

console.log(fLetters);
console.log(fLetters.includes(noPunc));

const findLast = () => {
    for (i = 0; i < words.length; i++) {
        let lastLetter = words[i];
        let lastClean = lastLetter.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        let clean = lastClean.replace(/\s{2,}/g, "");
        let n = clean.length;
        let lastList = lastLetter.charAt(n - 1);
        // return lastList;
        lLetters = lLetters + lastList;

    }
};
findLast()
console.log(lLetters);
console.log(noPunc)
console.log(process.argv)


// Need to be able to input the following in the terminal

// Node index.js --message "I Love Man U" --text "No-one ever knew that a very angry monster lived underneath the old, iron bridge. "
//  Give the answer true or false

// console.log(firstLetter)
// const main1 = () => process.argv.includes(message) ? "Found" : "Not Found";
// console.log(main1())


module.exports = { text, message };