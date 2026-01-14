

interface itemprops {
    title: string ,
    isPacked: boolean
}

function Item({title, isPacked }: itemprops){
   if(isPacked){
    return <li>{title}✅</li>
   }
    return <li>{title}</li>
}

export function Toggle(){
    return(
        <section>
                <h1>Ayush's working list </h1>
                <ul><Item title={"Next js"} isPacked={true}/></ul>
                <ul><Item title={"Next auth"} isPacked={false}/></ul>
        </section>
        
    )
}