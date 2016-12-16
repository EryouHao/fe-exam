/**
 * js排序算法之冒泡排序
 */
function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

var arr = [2,4,3,1,5];
console.log(bubbleSort(arr));
