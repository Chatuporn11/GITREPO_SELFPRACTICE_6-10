// 1.
console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
//Same thing
// 2.
console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
    console.log("parent of html is a root node")
}
// 3.
console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling) //<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">

// 4.
//1. get all child under <duv id='123'>
const divElement = document.getElementById('123')

//2. get all node type children (return (static) Node list, can use forEach)
const divChildNodes = divElement.childNodes
console.log(divChildNodes.length)
divChildNodes.forEach((child) => console.log(child))

//3. get only Element node type children (return (dynamic) HTMLCollection, cannot use forEach)
const divChildren = divElement.children
console.log(divChildren.length)
//for (let i = 0; i < divChildren.length; i++) {
//    console.log(divChildren[i])
// }

Array.from(divChildren).forEach((child) => console.log(child))

// 5.
const divElements = document.getElementById('123')
//1. get all attribute on <div id='123'>
const divAttrs = divElements.attributes
console.log(divAttrs.length) //2

for (let i = 0; i < divAttrs.length; i++) {
    const attrName = divAttrs[i].name //get attributes name
    const attrVAlue = divAttrs[i].value //get attributes value
    console.log(`attribute name: ${attrName}, attribute value: ${attrVAlue}`)
    console.log(divAttrs[i].ownerElement)
}
console.log(divAttrs)

// 6.
//1. What is the node type of first child of root node
console.log(document.firstChild.nodeType)

//2. if node type is an element node, display "Hello, HTML node", otherwise, display "Hello, any node"
if (document.firstElementChild.nodeType === Node.ELEMENT_NODE)
  console.log("Hello, HTML node")
else console.log("Hello, any node")

// 7.
//1. create <p></p>
const pElement = document.createElement("p") //<p></p>
//2. create id="p5"
//sol#1
// const idAttr = document.createAttribute("id")
// idAttr.value = "p5"
//Sol#2
pElement.setAttribute("id", "p5")
//3. binding id="p5" to <p>
// pElement.setAttributeNode(idAttr) //<p id="p5"></p5>
//4. create text value '#5'
//sol#1
// const pText = document.createTextNode("#5")
//sol#2
pElement.textContent = "#5"
//5. binding '#5' to <p>
// pElement.appendChild(pText) //<p id="p5">#5</p5>
//6. binding <p id="p5">#5</p5> to <body>
const body = document.body
body.appendChild(pElement) //<body>...<p id="p5">#5</p5></body

// 8.
let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)

