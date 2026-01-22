import Toggle from "./components/ui/toggle"

interface book {
  title: string,
  author: string,
  pages: number,
  price: number
  time?: string
}
function Book(props: book  ){
  
  return(<>
  <h3>{props.title}</h3>
    <h4>By: {props.author}</h4>
    <p>pages:{props.pages}</p>
    <p>price:${props.price}</p>
    { props.time !== undefined &&<div>time:{props.time}years</div>}

  </>)
}


function App() {

  return (
    <>
     <div>
      <h1>my book collection</h1>
      <Book title="the fire in the ice "
       author="Ayush"
       pages={339} 
       price={33}
       />
      <Toggle/>
       
     </div>
    </>
  )
}




export default App
