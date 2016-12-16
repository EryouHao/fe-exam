/**
 * js排序算法之选择排序
 * 基本思想：从未排序数组中找到最小元素，存放到排序序列的起始位置，然后，再从剩余未排序元素
 * 中继续寻找最小元素，放到已排序序列末尾，直到所有元素均排序。
 */
function selectSort(arr) {
    var minIndex, temp;
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
var arr = [1, 5, 2, 56, 7, 3, 45, 234, 76, 35, 45, 76, 345, 6, 34, 67];

console.log(selectSort(arr));
// [ 1, 2, 3, 5, 6, 7, 34, 35, 45, 45, 56, 67, 76, 76, 234, 345 ]
