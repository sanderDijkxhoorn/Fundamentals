const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('A: ', function (number1) {
    rl.question('B: ', function (number2) {
        rl.question('C: ', function (number3) {
            if (number1 == number2 && number2 == number3 && number3 == number1) {
                console.log("NIET OK");
            } else if (number1 == number2 || number2 == number3 || number3 == number1) {
                console.log("OK");
            } else {
                console.log("NIET OK");
            }
            rl.close();
        });
    });
});

rl.on('close', function () {
    process.exit(0);
});