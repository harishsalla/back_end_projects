// string
let name:string="pavan";
console.log(name)
// number
let num:number=123;
console.log(num)
// boolean
num.toFixed()
let bol:boolean=true
console.log(bol)

let hero:string;
function gethero(){
    return "myhero"
}

hero=gethero()

// function
function addTwo(num:number){
    return num*3

}
let n=addTwo(10)
// function for  sign up user
function signup(name:string,email:string,ispaid:boolean){
    return name
}
// if it must return same nnumber
function name(num:number):number{
    return num
}
// by using the above syntax it will return number itsself
let ne_arr=["harish","pavan","kiran"]
let my_arr=ne_arr.map((each):string=>{
    return each
}
)
// in the above we are edxplectley delecleraint the value must be string formate

export{}