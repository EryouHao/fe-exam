var module1 = (function() {
	var _count = 0;

	var m1 = function() {
		console.log('hello1');
	};

	var m2 = function() {
		console.log('hello2');
	};

	return {
		m1: m1,
		m2: m2
	};
})();