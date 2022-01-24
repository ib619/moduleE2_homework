let arr = [1,2,true,4, "Hello"];

console.log("Длина массива: " + arr.length)
arr.map(
    function(item, index){
        console.log(`Элемент массива с индексом ${index} - ${item}`);
    }
)