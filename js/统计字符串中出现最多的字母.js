/**
 * 统计字符串中出现最多的字母：
 * 例如：aabca => a
 */
//
function mostStr(str) {

    var obj = {};

    for (let i = 0, len = str.length, k; i < len; i++) {
        k = str.charAt(i);
        if (obj[k]) {
            obj[k]++;
        } else {
            obj[k] = 1;
        }
    }

    var m = 0;
    var i = null;
    for (var k in obj) {
        if (obj[k] > m) {
            m = obj[k];
            i = k;
        }
    }
    return i + ':' + m;
}

var str = 'aabca';
console.log(mostStr(str)); // a:3
