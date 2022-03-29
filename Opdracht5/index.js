var arrarr2 = [
    ["67", "27", "12"], 
    ["90", "63", "94"], 
    ["36", "58", "37"]
];

// darray(arrarr2);

// // returns
// [
//     ["36", "90", "67"], 
//     ["58", "63", "27"], 
//     ["37", "94", "12"]
// ];

function darray(array) {
    var result = [
        [array[2][0], array[1][0], array[0][0]],
        [array[2][1], array[1][1], array[0][1]],
        [array[2][2], array[1][2], array[0][2]]
    ];
    return result;    
}

console.log(arrarr2);
console.log(darray(arrarr2));