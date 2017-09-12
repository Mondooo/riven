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
	... omit some attributes ...
	... omit event bind ...
        id: ""
	ownerDocument: document
	childElementCount: 3   notice: this kind need to be IE9 or higher
	childNodes: (7) [text, div.section.first, text, div.section, text, div.section.last, text]
	children: (3) [div.section.first, div.section, div.section.last]
	firstChild: text
	firstElementChild: div.section.first
	lastChild: text
	lastElementChild: div.section.last
	previousElementSibling: header#header
	previousSibling: text
	nextElementSibling: footer
	nextSibling: text
	parentElement: body
	parentNode: body
	style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
	classList: ["content", value: "content"]
	className: "content"
	innerHTML: "↵		<div class="section first"></div>↵		<div class="section"></div>↵		<div class="section last"></div>↵	"
	innerText: ""
	outerHTML: "<div class="content">↵		<div class="section first"></div>↵		<div class="section"></div>↵		<div class="section last"></div>↵	</div>"
	outerText: ""
	textContent: "↵		↵		↵		↵	"
	tagName: "DIV"
	localName: "div"
	nodeName: "DIV"
	nodeType: 1
	nodeValue: null
	__proto__: HTMLDivElement
	*/
}
