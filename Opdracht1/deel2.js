// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('X: ', function (number1) {
//     rl.question('Y: ', function (number2) {
//         rl.question('Z: ', function (number3) {
//             let arr = [number1, number2, number3];

//             arr.sort(function (a, b) {
//                 return a - b;
//             });

//             var resultnum = +arr[0] + +arr[1];

//             console.log(resultnum);

//             rl.close();
//         });
//     });
// });

// rl.on('close', function () {
//     process.exit(0);
// });

const readline = require("readline"),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
rl.question("X: ", function (e) {
    rl.question("Y: ", function (n) {
        rl.question("Z: ", function (o) {
            let t = [e, n, o];
            t.sort(function (e, n) {
                return e - n
            });
            var r = +t[0] + +t[1];
            console.log(r), rl.close()
        })
    })
}), rl.on("close", function () {
    process.exit(0)
});