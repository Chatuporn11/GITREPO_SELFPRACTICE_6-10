/* 1.
function a() {
    return sum
}
function b() {
    return sum(1, 5)
}
function c(x) {
    return x
}
function sum() {
    return n1 + n2
}

console.log(typeof a());
console.log(typeof b());
console.log(typeof c(sum));
*/

/* 2.
function calculate(nums, compute) {
  return compute(nums)
}
function sum(elements) {
  return elements.reduce((total, current) => total + current)
}
function max(elements) {
  return Math.max(...elements)
}
function min(elements) {
  return Math.min(...elements)
}
function sort(elements) {
  return elements.sort((a, b) => a - b)
}
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))
*/

/* 3. 
let a = 1 //global scope
function doSomething(x) {
    let a = 10 //local scope
    let greet = "Hello"
    function echo() {
        let a = 555
        let b = "Bob"
        console.log(a, b)
    }
    echo()
    return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a = ${a}`)
*/

/* 4.
function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo
}
console.log(doSomething("guest")());
*/

// 5.
function makeAdder(x, y) {
    function add(y) {
        //closure function
        return x + y
    }
    return add
}

let add5 = makeAdder(5)   //add5 = add
let add10 = makeAdder(10)  //จำได้ว่า x เท่ากับเท่าไหร่
console.log(add5(5));  //10
console.log(add10(6));  //16

// 6.
const idGenerator = () =>{
    let id = 0
    return function(){
        id += 1
            return id
    }
}
 
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())
idGenerator()

// 7.
function outerFunction(x,y) {
    function add(y) {
        return x + y
    }
    return add;
}

let addFive = outerFunction(5)
console.log(addFive(3))

let addTen = outerFunction(10)
console.log(addTen(2))

