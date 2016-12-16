// 斐波那契数列
var result = [];

function fn(n) {
	if (n == 1) {
		return 1;
	} else if (n == 2) {
		return 1;
	} else {
		if (result[n]) {
			return result[n];
		} else {
			// arguments.callee() 表示 fn()
			result[n] = arguments.callee(n - 1) + arguments.callee(n - 2);
			return result[n];
		}
	}
}