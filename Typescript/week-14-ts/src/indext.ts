interface people {
    name: string,
    age: number ,
    isLegal(): boolean;
}

class Manager implements people{
    name: string;
    age: number;


    constructor(name: string, age: number){
        this.name = name;
        this.age = age ;
    }
    isLegal() {
        return this.age>18
    }
}

let user = new Manager("jhon",21);
console.log(user.isLegal())

type employee = {
    name: string;
    startDate: string;
}

type teamLead = {
    name: string;
    department: string;
}

type teamHead = employee & teamLead;

let e: employee = {
    name: "ayush",
    startDate: "01-02-2222"
}

let k: teamLead = {
    name: "ayush",
    department: "Teamcenter"
}

let t: teamHead = {
    name: "ayush",
    startDate: "xyzz",
    department: "tc-nx"
}

