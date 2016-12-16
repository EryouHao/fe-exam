/**
 * js排序算法之插入排序
 * 基本原理：和打扑克牌一样，抽一张牌，找到合适的位置插入，后面的元素依次向后移动一个位置。
 */

function insertSort(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

var arr = [1, 5, 2, 56, 7, 3, 45, 234, 76, 35, 45, 76, 345, 6, 34, 67];

console.log(insertSort(arr));
// [ 1, 2, 3, 5, 6, 7, 34, 35, 45, 45, 56, 67, 76, 76, 234, 345 ]
