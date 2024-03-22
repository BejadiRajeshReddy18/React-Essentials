
var state = [1,2,3,4,5]
var copy = [...state] // spread operator
copy.pop()

// Array objects Destructing 

var stat = {name:"rocky",age:21}
var cop = {...stat}
state = copy 

var obj = {
    name: "string",
    social: {
        facebook: {
            first: "haa",
            sec: "aha",
        },
    },
};

console.log(obj.social.facebook.sec)
const {sec,first} = obj.social.facebook
console.log(sec)
console.log(first)

var arr = [12,function(){}]
var [fir,second] = arr
console.log(fir,second)

var arr1 = [14,function(){},15]
var [f1st,,snd] = arr1;
console.log(f1st,snd)

// import and export  
function Cart(){

}
//! export default Cart  // import Cart from "./script"

// ? export function Add(){}
//?  export function Sub(){}  //  import {Add,Sub} from "./script"

//Arrow Functions
// function abcd(){}
// const abcd = ()=> {}

const bcd = (val)=>{   // const bcd = val => {}  remove brackets for one parameter
    console.log(val)
}
bcd(23)

const efg = () => "sai"  // implicit return
console.log("hey"+efg());

const fg = () => { return "sai"} 

const gh = () => ({name:"abcd",age:21})
console.log(gh())

// map filter
// map & filter return new array 
//! Map Creates a new array by applying a function to each element of the original array.
var arr2 = [1,2,3,4,6]
const ans = arr2.map(val => val*2)

var arr3 = [3,4,5,6]
const answer = arr3.map(elem => elem+1) // update arr3 to ans with arr3 = answer

var arr4 = [1,2,3,4,5]
const sol = arr4.map(elem => elem>3 ? elem+2 : elem)

//!Creates a new array containing only elements that pass a test implemented by the provided function.
var arr5 = [1,2,3,4,5]
const solution = arr5.filter(elem => elem>4)

var arr6 = [
    {name:"rocky",gender:"male"},
    {name:"sai",gender:"male"},
    {name:"chitti",gender:"female"},
]
const an = arr6.filter(elem => elem.gender == "male")

var arr7 = [
    {product:"iphone",price:1000},
    {product:"airbus",price:100},
    {product:"tablet",price:500},
    {product:"Dairy milk",price:10},
]
const solu = arr7.filter(elem => elem.price<100)