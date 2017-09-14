const element = document.querySelector("div.div");
element.onauxclick = function() {
	console.log("onauxclick");
}
element.onbeforecopy = function() {
	console.log("onbeforecopy");
}
element.onbeforecut = function() {
	console.log("onbeforecut");
}
element.onbeforepaste = function() {
	console.log("onbeforepaste");
}
element.onblur = function() {
	console.log("onblur");
}
element.oncancel = function() {
	console.log("oncancel");
}
element.oncanplay = function() {
	console.log("oncanplay");
}
element.oncanplaythrough = function() {
	console.log("oncanplaythrough");
}
element.onchange = function() {
	console.log("onchange");
}
element.onclick = function(e) {
	// what is in e?
	// 鼠标键盘属性
	// altKey: false // alt键
	// ctrlKey: false // ctrl键
	// metaKey: false // meta键
	// shiftKey: false // shift键
	// button: 0 // 哪个鼠标按钮被点击
	// buttons: 0
	// which: 1
	// movementX: 0
	// movementY: 0
	// clientX: 107 // 鼠标指针的水平坐标 相对浏览器窗口
	// clientY: 51 // 鼠标指针的垂直坐标
	// screenX: 240 // 鼠标指针的水平坐标 相对整个屏幕
	// screenY: 235
	// pageX: 107 // 鼠标指针的水平坐标 clientX + 滚动条长度
	// pageY: 51
	// offsetX: 97 // 鼠标指针的水平坐标 事件源元素内部位置
	// offsetY: 41
	// x: 107
	// y: 51
	// layerX: 107
	// layerY: 51
	// relatedTarget: null // 对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点
	//                     // 对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点
    

	// 标准event属性
	// bubbles: true
	// cancelBubble: false
	// cancelable: true
	// composed: true
	// currentTarget: div.div
	// target: div.div
	// defaultPrevented: false
	// eventPhase: 2
	// timeStamp: 5755.845000000001
	// type: "click"
	// srcElement: div.div
	// toElement: div.div
	// fromElement: null
	// isTrusted: true
	// returnValue: true
	// detail: 1
	// path: (5) [div.div, body, html, document, Window]
	// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
	// view: Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
	// __proto__: MouseEvent
	console.log("onclick");
}
element.onclose = function() {
	console.log("onclose");
}
element.oncontextmenu = function() {
	console.log("oncontextmenu");
}
element.oncopy = function() {
	console.log("oncopy");
}
element.oncuechange = function() {
	console.log("oncuechange");
}
element.oncut = function() {
	console.log("oncut");
}
element.ondblclick = function() {
	console.log("ondblclick");
}
element.ondrag = function() {
	console.log("ondrag");
}
element.ondragend = function() {
	console.log("ondragend");
}
element.ondragenter = function() {
	console.log("ondragenter");
}
element.ondragleave = function() {
	console.log("ondragleave");
}
element.ondragover = function() {
	console.log("ondragover");
}
element.ondragstart = function() {
	console.log("ondragstart");
}
element.ondrop = function() {
	console.log("ondrop");
}
element.ondurationchange = function() {
	console.log("ondurationchange");
}
element.onemptied = function() {
	console.log("onemptied");
}
element.onended = function() {
	console.log("onended");
}
element.onerror = function() {
	console.log("onerror");
}
element.onfocus = function() {
	console.log("onfocus");
}
element.ongotpointercapture = function() {
	console.log("ongotpointercapture");
}
element.oninput = function() {
	console.log("oninput");
}
element.oninvalid = function() {
	console.log("oninvalid");
}
element.onkeydown = function() {
	console.log("onkeydown");
}
element.onkeypress = function() {
	console.log("onkeypress");
}
element.onkeyup = function() {
	console.log("onkeyup");
}
element.onload = function() {
	console.log("onload");
}
element.onloadeddata = function() {
	console.log("onloadeddata");
}
element.onloadedmetadata = function() {
	console.log("onloadedmetadata");
}
element.onloadstart = function() {
	console.log("onloadstart");
}
element.onlostpointercapture = function() {
	console.log("onlostpointercapture");
}
element.onmousedown = function() {
	console.log("onmousedown");
}
element.onmouseenter = function() {
	console.log("onmouseenter");
}
element.onmouseleave = function() {
	console.log("onmouseleave");
}
element.onmousemove = function() {
	console.log("onmousemove");
}
element.onmouseout = function() {
	console.log("onmouseout");
}
element.onmouseover = function() {
	console.log("onmouseover");
}
element.onmouseup = function() {
	console.log("onmouseup");
}
element.onmousewheel = function() {
	console.log("onmousewheel");
}
element.onpaste = function() {
	console.log("onpaste");
}
element.onpause = function() {
	console.log("onpause");
}
element.onplay = function() {
	console.log("onplay");
}
element.onplaying = function() {
	console.log("onplaying");
}
element.onpointercancel = function() {
	console.log("onpointercancel");
}
element.onpointerdown = function() {
	console.log("onpointerdown");
}
element.onpointerenter = function() {
	console.log("onpointerenter");
}
element.onpointerleave = function() {
	console.log("onpointerleave");
}
element.onpointermove = function() {
	console.log("onpointermove");
}
element.onpointerout = function() {
	console.log("onpointerout");
}
element.onpointerover = function() {
	console.log("onpointerover");
}
element.onpointerup = function() {
	console.log("onpointerup");
}
element.onprogress = function() {
	console.log("onprogress");
}
element.onratechange = function() {
	console.log("onratechange");
}
element.onreset = function() {
	console.log("onreset");
}
element.onresize = function() {
	console.log("onresize");
}
element.onscroll = function() {
	console.log("onscroll");
}
element.onsearch = function() {
	console.log("onsearch");
}
element.onseeked = function() {
	console.log("onseeked");
}
element.onseeking = function() {
	console.log("onseeking");
}
element.onselect = function() {
	console.log("onselect");
}
element.onselectstart = function() {
	console.log("onselectstart");
}
element.onstalled = function() {
	console.log("onstalled");
}
element.onsubmit = function() {
	console.log("onsubmit");
}
element.onsuspend = function() {
	console.log("onsuspend");
}
element.ontimeupdate = function() {
	console.log("ontimeupdate");
}
element.ontoggle = function() {
	console.log("ontoggle");
}
element.onvolumechange = function() {
	console.log("onvolumechange");
}
element.onwaiting = function() {
	console.log("onwaiting");
}
element.onwebkitfullscreenchange = function() {
	console.log("onwebkitfullscreenchange");
}
element.onwebkitfullscreenerror = function() {
	console.log("onwebkitfullscreenerror");
}
element.onwheel = function() {
	console.log("onwheel");
}