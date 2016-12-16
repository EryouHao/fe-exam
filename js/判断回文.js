/**
 * 判断一个字符串是否是回文：
 * 例如： abcba => true
 *       abcbc => false
 */

// 将字符串通过split转换成数组，然后利用reverse方法反转，利用join方法转换成字符串
function checkPalindrom(str) {
    return str = str.split('').reverse().join('');
}

// test

var str1 = 'abcba';
var str1Reverse = checkPalindrom(str1);

console.log(str1 === str1Reverse); // true

var str2 = 'abcbc';
var str2Reverse = checkPalindrom(str2);

console.log(str2 === str2Reverse);
