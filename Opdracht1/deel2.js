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
            if (x > y && x > z) {
                if (y > z) {
                    console.log(z  + ", " + y + ", " + x);
                    //console.log(x + ", " + y + ", " + z);
                } else {
                    console.log(y + ", " + z + ", " + x);
                    //console.log(x + ", " + z + ", " + y);
                }
            } else if (y > x && y > z) {
                if (x > z) {
                    console.log(z + ", " + x + ", " + y);
                } else {
                    console.log(x + ", " + z + ", " + y);
                }
            } else if (z > x && z > y) {
                if (x > y) {
                    console.log(y + ", " + x + ", " + z);
                } else {
                    console.log(x + ", " + y + ", " + z);
                }
            } else if (z == x) {
                if(x > y) {
                    console.log(y + ", " + x + ", " + z);
                } else if (x == y) {
                    console.log(y + ", " + x + ", " + z);
                } else {
                    console.log(z + ", " + x + ", " + y);
                }
            } else if (y == x) {
                if(z > y) {
                    console.log(y + ", " + x + ", " + z);
                } else {
                    console.log(z + ", " + x + ", " + y);
                }
            } else if (z == y) {
                if(x > y) {
                    console.log(y + ", " + x + ", " + z);
                } else {
                    console.log(x + ", " + z + ", " + y);
                }
            }
            rl.close();
        })
    })
});

rl.on("close", function () {
    process.exit(0);
});

// If statement maar dan kleiner gemaakt variant
// const readline = require("readline"),
//     rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
// rl.question("X: ", function (o) {
//     rl.question("Y: ", function (l) {
//         rl.question("Z: ", function (e) {
//             o > l && o > e ? l > e ? console.log(e + ", " + l + ", " + o) : console.log(l + ", " + e + ", " + o) : l > o && l > e ? o > e ? console.log(e + ", " + o + ", " + l) : console.log(o + ", " + e + ", " + l) : e > o && e > l ? o > l ? console.log(l + ", " + o + ", " + e) : console.log(o + ", " + l + ", " + e) : e == o ? o > l ? console.log(l + ", " + o + ", " + e) : o == l ? console.log(l + ", " + o + ", " + e) : console.log(e + ", " + o + ", " + l) : l == o ? e > l ? console.log(l + ", " + o + ", " + e) : console.log(e + ", " + o + ", " + l) : e == l && (o > l ? console.log(l + ", " + o + ", " + e) : console.log(o + ", " + e + ", " + l)), rl.close()
//         })
//     })
// }), rl.on("close", function () {
//     process.exit(0)
// });