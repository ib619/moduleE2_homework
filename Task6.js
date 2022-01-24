let arr = [1,1,1,1];
let res_arr = [];
arr.forEach(
    function (item, index, array) {
        res_arr.push(item == array[0]);
    }
)
let result = res_arr.reduce(
    function (previousValue, item) {
        return previousValue && item
    }
)
console.log(arr);
console.log(result);