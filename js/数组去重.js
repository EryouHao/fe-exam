/**
 * 去掉一组整型数组重复的值：
 * 例如： [1,2,2,3,4,4,5]
 *     =>[1,2,3,4,5]
 */
// 根据indexOf方法来判断数组中元素在新数组出现的位置，若没有即为-1，并push
function unique(arr) {
    var tempArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (tempArr.indexOf(arr[i]) === -1) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
var arr = [1, 2, 2, 3, 4, 4, 5];
var newArr = unique(arr);
console.log(newArr);
