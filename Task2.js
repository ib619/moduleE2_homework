let test_var = 4;

let test_var_type = typeof test_var;
switch (test_var_type) {
    case "boolean":
        console.log(test_var + ' - логического типа');
        break;
    case "number":
        console.log(test_var + ' - число');
        break
    case "string":
        console.log(test_var + ' - строка');
        break
    default:
        console.log('Тип ' + test_var + ' не определён');
}