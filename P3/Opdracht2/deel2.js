
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Tafel: ', function (tafel) {
    for(lol = 1; lol <= tafel; lol++) {
        console.log("\nTafel: " + lol);
        for(i=1; i <= 10; i++){
            console.log(i + "x" + lol + "=" + i*lol);
        }
    }
    rl.close();

});

rl.on('close', function () {
    process.exit(0);
});
