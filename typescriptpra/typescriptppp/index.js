"use strict";
console.log("1");
let a = "name";
a = "hello";
// we need to define type explicitely
let b = 12;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// efault and optional para
const option = (name, id = 122) => {
    return `hello  ${name}`;
};
// for oprtion
const op = (name, id) => {
    return name.length;
};
// arrry 
const new_arr = [1, 2, 3, 4, 5];
// to define array
// using array constructor
const arr_con = new Array(1, 2, 3, 4, 5, 6);
// using array of methof
const names = Array.of("hello");
