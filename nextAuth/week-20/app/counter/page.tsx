import { useState } from "react"

export default function Counter(){
  const[count , setCount] = useState(0)

  return(<>
    {count}
  <button onClick={()=>{setCount(count+1)}}>increment</button>
    </>
  )
}