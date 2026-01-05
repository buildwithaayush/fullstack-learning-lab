const greet = (name: string) =>{
console.log(`hello ${name}`)
}

const sum = (a: number , b: number): number => {
    return a + b
}

let ans = sum(1,3);
console.log(ans);

const delayedcall=(fn: () => void)=>{
setTimeout(fn,1000)
}

delayedcall(()=>{
    console.log("hello")
})


let emp1 = {
name: "ayush",
age: 21,
department: "abc",
address: {
    pincode:485001
}

}




interface user { 
    name : string,
    age: number ,
    department: string,
     address? : { 
    city ?: string ,
    state?: string ,
    pincode: number 
}
}

let islegal = (emp: user): boolean =>{
if(emp.age > 18){
    return true;
}else{
    return false;
}
console.log(emp.address?.pincode);
}

let abc = islegal(emp1)
console.log(abc)



