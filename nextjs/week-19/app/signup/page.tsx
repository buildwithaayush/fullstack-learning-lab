'use client'
import axios from "axios";
import { useState } from "react";
export default function Signup(){
    const[username , setUsername ] = useState("");
    const[ password,setPassword ] = useState("");
    return(<> 
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-slate-100 rounded-md flex flex-col ">
            <p className="text-5xl font-bold ml-25">Signup</p>
            <input className="text-3xl p-4 m-1 rounded-md  border"type="text" placeholder="username" value={username}   onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <input className="text-3xl p-4 m-1 rounded-md  border" type="password" placeholder="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} />

            <button 
            className="text-3xl p-4 m-1 rounded-md hover:bg-blue-100"
            onClick={()=>{
                axios.post("http://localhost:3000/api/v1/signup",{
                   username,
                   password,
                   
                })
            }}
            >Sign up</button>
        </div>
    </div>
    </>)
}