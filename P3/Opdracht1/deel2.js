// Kleinste veriant.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("X: ", function (x) {
//     rl.question("Y: ", function (y) {
//         rl.question("Z: ", function (z) {
//             let t = [x, y, z];
//             t.sort(function (x, y) {
//                 return x - y;
//             });
//             var r = t[0] + t[1] + t[2];
//             console.log(r);
//             rl.close();
//         })
//     })
// });

// rl.on("close", function () {
//     process.exit(0);
// });

// If statement variant.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("X: ", function (x) {
    rl.question("Y: ", function (y) {
        rl.question("Z: ", function (z) {
            if (x >= y && x >= z) {
                if (y >= z) {
                    console.log(z  + ", " + y + ", " + x);
                } else {
                    console.log(y + ", " + z + ", " + x);
                }
            } else if (y >= x && y >= z) {
                if (x >= z) {
                    console.log(z + ", " + x + ", " + y);
                } else {
                    console.log(x + ", " + z + ", " + y);
                }
            } else if (z >= x && z >= y) {
                if (x >= y) {
                    console.log(y + ", " + x + ", " + z);
                } else {
                    console.log(x + ", " + y + ", " + z);
                }
            }
            rl.close();
        })
    })
});

rl.on("close", function () {
    process.exit(0);
});