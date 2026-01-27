export default async function Blogpost({params,}:{params:Promise<{postId: string}>}){
        const {postId} = await params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data = await  response.json();
       return(<>
       <div>welcome to blog post</div>
       <div>This is your blog {postId}</div>
       <div>{data.title}</div>
       <div>{data.body}</div>
       </>)
}

//rendering 
// the process of creating html that need to dumped into the dom 

// static site generation 



//client side rendering 
//it means jo aapko browser hai usme rendering ho rhi hai. in 
//react there is heavy client side rendering 
//simple counter is a client side rendering



// server side rendering 



//server components
