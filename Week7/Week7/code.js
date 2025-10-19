//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent

const p = document.createElement('p')
p.setAttribute('format','italic')
document.getElementById('demo').appendChild(p)
const text1 = document.createElement('i')
const text2 = document.createElement('i')
const text3 = document.createElement('i')
 
text1.innerHTML= 'Sameple Italic text '
text2.innerText = 'Sameple Italic text '
text3.textContent = 'Sample Italic text '
p.appendChild(text1)
p.appendChild(text2)
p.appendChild(text3)  
 
//  Practice
 
 