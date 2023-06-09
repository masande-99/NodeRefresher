const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the number of stones: ', (n) => {
    if (n % 2 === 0) {
        console.log('Bob');
    } else {
        console.log('Alice');
    }
    rl.close();
});