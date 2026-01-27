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