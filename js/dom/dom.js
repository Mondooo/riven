function selecting() {
    // by CSS selector(just like jQuery)
	const elements1 = document.querySelectorAll("header, div.section.first, *[custom-attr='footer']");
		// 0: header#header
	    // 1: div.section.first
	    // 2: footer
	const element1 = document.querySelector("div.content");
	    // element1 = div.content
	// by ClassName
	const elements2 = element1.getElementsByClassName("section");
	    // 0: section.first
	    // 1: section
	    // 2: section last
	// by TagName
	const elements3 = element1.getElementsByTagName("div");
	    // 0: section.first
	    // 1: section
	    // 2: section last
	// by Id
	const element2 = document.getElementById("header");
	    // element2 = header#header
}

function creating() {
	// remove class last
	let element = document.querySelector("div.section.last");
	if (element !== null) {
         element.classList.remove("last");
	}

	element = document.createElement("div"); // create一般的元素
	element.classList.add("section");
	element.classList.add("last");
	element.innerHTML = "<div>new added</div><a href='javascript:void(0);'>delete</a>"; // 创建文本节点可以用createTextNode("text"), 但最好用innerHTML
	

	const parent = document.querySelector("div.content");
	parent.appendChild(element);
}

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", creating);

function removing(element) {
	element.parentNode.removeChild(element);
}

const removeBtns = document.querySelectorAll("div.section a");
removeBtns.forEach(function(btn) {
	btn.addEventListener("click", function(evt) {
		removing(evt.target.parentNode);
	});
});

function whatIsElement() {
	const element = document.querySelector("div.content");
	/* ↓↓↓↓
	accessKey: ""
	align: ""
	assignedSlot: null
	attributes: NamedNodeMap {0: class, length: 1}
	baseURI: "file:///C:/Users/guoqiche/Github/riven/js/dom/test.html"
	childElementCount: 3
	childNodes: (7) [text, div.section.first, text, div.section, text, div.section.last, text]
	children: (3) [div.section.first, div.section, div.section.last]
	classList: ["content", value: "content"]
	className: "content"
	clientHeight: 0
	clientLeft: 0
	clientTop: 0
	clientWidth: 1314
	contentEditable: "inherit"
	dataset: DOMStringMap {}
	dir: ""
	draggable: false
	firstChild: text
	firstElementChild: div.section.first
	hidden: false
	id: ""
	innerHTML: "↵		<div class="section first"></div>↵		<div class="section"></div>↵		<div class="section last"></div>↵	"
	innerText: ""
	isConnected: true
	isContentEditable: false
	lang: ""
	lastChild: text
	lastElementChild: div.section.last
	localName: "div"
	namespaceURI: "http://www.w3.org/1999/xhtml"
	nextElementSibling: footer
	nextSibling: text
	nodeName: "DIV"
	nodeType: 1
	nodeValue: null
	nonce: ""
	offsetHeight: 0
	offsetLeft: 8
	offsetParent: body
	offsetTop: 26
	offsetWidth: 1314
	onabort: null
	... event bind ...
	outerHTML: "<div class="content">↵		<div class="section first"></div>↵		<div class="section"></div>↵		<div class="section last"></div>↵	</div>"
	outerText: ""
	ownerDocument: document
	parentElement: body
	parentNode: body
	prefix: null
	previousElementSibling: header#header
	previousSibling: text
	scrollHeight: 0
	scrollLeft: 0
	scrollTop: 0
	scrollWidth: 1314
	shadowRoot: null
	slot: ""
	spellcheck: true
	style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
	tabIndex: -1
	tagName: "DIV"
	textContent: "↵		↵		↵		↵	"
	title: ""
	translate: true
	__proto__: HTMLDivElement
	*/
}