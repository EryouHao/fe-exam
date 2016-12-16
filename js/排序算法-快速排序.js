/**
 * js排序算法之快速排序
 * 基本思想：通过一趟排序将待排序记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的
 * 关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 * 利用递归，利用二分法，直到要排序的数组元素数量为1
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
var arr = [1, 5, 2, 56, 7, 3, 45, 234, 76, 35, 45, 76, 345, 6, 34, 67];

console.log(quickSort(arr));
// [ 1, 2, 3, 5, 6, 7, 34, 35, 45, 45, 56, 67, 76, 76, 234, 345 ]
