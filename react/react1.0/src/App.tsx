interface book {
  title: string,
  author: string,
  pages: number,
  price: number
}
function Book(props: book){
  
  return(<>
  <h3>{props.title}</h3>
    <h4>By: {props.author}</h4>
    <p>pages:{props.pages}</p>
    <p>price:${props.price}</p>

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
       price={33} />
     </div>
    </>
  )
}




export default App
