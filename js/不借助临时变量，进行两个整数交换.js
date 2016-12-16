/**
 * 不借助临时变量，进行两个整数交换
 * 例如： a = 1; b = 2;
 *     =>a = 2; b = 1;
 */

function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}

var a = 1,
    b = 2;

console.log(swap(a, b)); // [2, 1]
