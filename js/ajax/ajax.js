// 0: (Uninitialized) the send( ) method has not yet been invoked. 
// 1: (Loading) the send( ) method has been invoked, request in progress. 
// 2: (Loaded) the send( ) method has completed, entire response received. 
// 3: (Interactive) the response is being parsed. 
// 4: (Completed) the response has been parsed, is ready for harvesting. 

// 老版本的XMLHttpRequest
// * 只支持文本数据的传送，无法用来读取和上传二进制文件。
// * 传送和接收数据时，没有进度信息，只能提示有没有完成。
// * 受到"同域限制"（Same Origin Policy），只能向同一域名的服务器请求数据。

// 新版本的XMLHttpRequest
// * 可以设置HTTP请求的时限。
// * 可以使用FormData对象管理表单数据。
// * 可以上传文件。
// * 可以请求不同域名下的数据（跨域请求）。
// * 可以获取服务器端的二进制数据。
// * 可以获得数据传输的进度信息。

function getAjax(url, success) {
	// 1. new XMLHttpRequest
	const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	// 2. config xhr
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState > 3 && xhr.status == 200) {
			success(xhr.responseText);
		}
	};
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	//3. send xhr
	xhr.send();

	return xhr;
}

function postAjax(url, data, success) {
	var params = typeof data == 'string' ? data : Object.keys(data).map(function(k) {
		return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
	}).join('&');
	const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('POST', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState > 3 && xhr.status == 200) {
			success(xhr.responseText);
		}
	};
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(params);
	return xhr;
}

function getCORS(url, success) {
	const xhr = new XMLHttpRequest();
	if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // XDomainRequest属于ie8 ie9
	xhr.open('GET', url);
	xhr.onload = success;
	xhr.send();
	return xhr;
}