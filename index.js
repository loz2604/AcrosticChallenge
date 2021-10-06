const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { text, message } = require("./utils/")

//  Acrostic Challenge - phrases hidden in text

const main = () => {
    if (argv.text) {
        text(argv.text)
    } else if (argv.message) {
        message(argv.message)
    }
}
main();