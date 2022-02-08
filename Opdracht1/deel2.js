// const readline = require("readline"),
//     rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
// rl.question("X: ", function (e) {
//     rl.question("Y: ", function (n) {
//         rl.question("Z: ", function (o) {
//             let t = [e, n, o];
//             t.sort(function (e, n) {
//                 return e - n
//             });
//             var r = t[0] + t[1];
//             console.log(r), rl.close()
//         })
//     })
// }), rl.on("close", function () {
//     process.exit(0)
// });

const readline = require("readline"),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
rl.question("X: ", function (e) {
    rl.question("Y: ", function (n) {
        rl.question("Z: ", function (o) {
            if (e < n && e < o) {
                //console.log("tes 1 t");
                console.log(e + n);
            } else if (e < n && e > o) {
                //console.log("test 2 ");
                console.log(o + e);

            } else if (e > n && e > o) {
                //console.log("test 3 ");
                console.log(o + n);
            } else if (o == e && e < n) {
                //console.log("1")
                console.log(n + o);

            } else if (n == e && e < o) {
                //console.log("12")
                console.log(e + n);

            } else if (n == o && o < e) {
                console.log("13")
                console.log(e + n + o);

            } else if (o == e && e > n) {
                //console.log("14")
                console.log(n + o);

            } else if (n == e && e > o) {
                //console.log("15")
                console.log(o + e);

            } else if (n == o && o > e) {
                console.log("16")
                console.log(e + n + o);

            } else if (o == e && o == n && n == e) {
                console.log("Alles is hetzelfde.");
            }

            rl.close();
        })
    })
}), rl.on("close", function () {
    process.exit(0);
});