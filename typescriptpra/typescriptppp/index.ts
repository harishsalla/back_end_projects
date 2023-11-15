console.log("1")
let a:string="name"
a="hello"
// we need to define type explicitely
let b:number=12;

function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(1,2))


// efault and optional para
const option=(name:string,id:number=122)=>{
    return `hello  ${name}`
}

// for oprtion
const op=(name:string,id?:number):number=>{
    return name.length
}

// arrry 
const new_arr:number[]=[1,2,3,4,5]
// to define array
// using array constructor
const arr_con:number[]=new Array(1,2,3,4,5,6)
// using array of methof
const names:string[]=Array.of("hello")


