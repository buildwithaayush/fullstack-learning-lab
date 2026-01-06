interface user {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string;
    
}
type UpdateProps = Pick<user, "name"|"age"|"email">
type UpdatePropsOptional = Partial<UpdateProps>
function updateUser(UpdateProps: UpdatePropsOptional){

}
updateUser({
    name:"ayush"
})
const user  = {
    name: "harkirat",
    age: 21,
    
}

const a = [1,2,3,4];
a[0] = 4;
//here internal values of arr can be changed where as if we do not want to see changes in internal value
// we use "readonly" in types typescript

type users = {
     name: string,
     age: number
}

// const per: users = {
//     name: "john",
//     age:22
// }

// to remove the monotony of writing readonly everytime 
// readonly age: number

// we can do this 

const per: Readonly<users> = {
    name: "john",
    age:22
}

// Record amd Map 
type User = {
    name: string,
    username: string
}




const emp1 = new Map<string,User>()
emp1.set("abcd" , {name: "ayushmap", username: "abc"})

