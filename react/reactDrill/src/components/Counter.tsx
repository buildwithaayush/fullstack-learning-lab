
import { useState } from 'react'
import './App.css'

function Counter() {
 
const [count , setCount ] = useState(0);

  return (
  
      <>
      <div className='aspect-3/2 bg-gray-100 shadow-lg flex flex-col justify-center gap-6'>
        <div className='text-7xl font-semibold'>{count}</div>
       <div className='flex justify-center gap-4'>
        <button className='bg-slate-300 px-4 py-2 hover:bg-slate-500 rounded-md' onClick={()=> setCount(c => c + 1)}>+ Increase</button>
      <button className='bg-slate-300 px-4 py-2 hover:bg-slate-500 rounded-md' onClick={()=> setCount(c => Math.max(0 , c -1 ))}>- Decrease</button>
      <button className='bg-slate-300 px-4 py-2 hover:bg-slate-500 rounded-md' onClick={()=> setCount(0)}>0 Reset</button>
      
       </div>
      
     </div>
     
      
     

      </>
  )
}

export default Counter
