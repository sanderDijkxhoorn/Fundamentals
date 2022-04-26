var arr = [5, 8, 201, 28, 8];

arr.forEach(function(val, i) {
    if(val == 8) {
        arr.splice(i, 1);
    }
    
});

console.log(arr);