const readline = require('readline-sync')

function start() {
    const content = {};

    content.searcTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The historyh of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose an option');
        const selectedPrefixText = prefixes[selectedPrefixIndex];
        return selectedPrefixText;
    }

    function askAndReturnSearchTerm() {
        return readline.question('Type a wikipedia serch term: ');
    }

    console.log(content)


}

start();