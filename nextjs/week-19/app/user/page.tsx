'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function User(){
type Todo = {
    id : number;
    title: string;
    completed: boolean;
}
const[loading , setLoading ] = useState(true);
const[data, setData] = useState <Todo[]>([]);

useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/todos")
.then(response => { 
    setData(response.data)
    setLoading(false)
})
},[])

if(loading){
    return(
    <div>loading</div>
    )
}

return(
    <div>
        {data.slice(0,10).map(todo => (
            <div key={todo.id}>{todo.title}</div>
        ) )}
    </div>
)

}