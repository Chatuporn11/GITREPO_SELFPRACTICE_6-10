//1. find all child nodes under <ul id="appetizer">
// const ulElement = document.querySelector("#appetizer")
const ulElement = document.getElementById("appetizer")
console.log(ulElement)
// get childNodes, return NodeList (array-like with implement forEach)

const appetizerChildNodes = ulElement.childNodes
appetizerChildNodes.forEach((ele) => console.log(ele))
console.log(appetizerChildNodes.length) //9

//2. find meat element that a text value contain "soup"

const meatItems = document.querySelectorAll('li.meat');
 meatItems.forEach(item => {
   if (item.textContent.toLowerCase().includes('soup')) {
     console.log(item.textContent); // or console.log(item) to see the element
   }
 });

//3. goto the first child element node under <ul id="soup"> and display all sibling nodes
//output :

/* <li class="meat">Spicy Bacon-Corn Soup</li>
        <li class="vegan">Vegetable Soup</li>
        <li class="meat">Beef Soup</li>
        <li class="vegan">Coconut Soup</li> */
const ulElements = document.querySelector("#soup")
let currentNode = ulElements.firstElementChild
while (currentNode !== null) {
  console.log(currentNode.outerHTML) // outerHTML แสดง <li>...</li> ทั้งแท็ก
  currentNode = currentNode.nextElementSibling
}


