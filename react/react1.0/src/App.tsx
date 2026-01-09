import { useRef, useEffect } from 'react';


// function App() {
// const [count , setCount ] = useState(0);
// const myref = useRef(0);


// function handleClick(){
// setCount(5);
// myref.current = 7;
// console.log(`myref.current value is  ${myref.current}`)
// }

//   return (
//     <>
//       <p>count: {count}</p>
//       <p>Ref Value: {myref.current}</p>
//        <button onClick={handleClick}>Update Values</button>
//     </>
//   )
// }

// export default App

function App(){
const inputRef = useRef<HTMLInputElement>(null);

 useEffect(()=>{
  inputRef.current?.focus();
}, [] )

return(<>
<input type="text" ref={inputRef}/>
<button>login</button>
</>)
}
export default App
