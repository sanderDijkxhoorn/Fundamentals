var arr = [5, 8, 201, 28, 8];
var count = 0;
arr.forEach(el => {
    if (el == 8) {
        count++;
    }
});
console.log(count);