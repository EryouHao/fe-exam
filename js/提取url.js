url ='http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e';

function serilizeUrl(url) {
	var result = {};
	url = url.split("?")[1];
	var map = url.split("&");
	for (var i = 0,len = map.length; i < len; i++) {
		result[map[i].split("=")[0]] = map[i].split("=")[1];
	}

	return result;
}

// 查询字符串参数
function urlArgs() {
	var args = {};
	var query = location.search.substring(1);
	var pairs = query.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if(pos == -1) continue;
		var name = pairs[i].substring(0, pos);
		var value = pairs[i].substring(pos + 1);
		value = decodeURIComponent(value);
		args[name] = value;
	}
	return args;
}
