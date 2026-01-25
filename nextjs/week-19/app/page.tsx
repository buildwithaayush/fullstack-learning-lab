import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="text-4xl font-bold">
    Todo application 
    </div>
    <div> 
       <Link className="text-3xl p-4 m-1 rounded-md bg-slate-100" href="/signin">signin</Link>
   <Link  className="text-3xl p-4 m-1 rounded-md bg-slate-100" href="/signup">signup</Link>
  </div>
 </div>
    
    </>
  );
}
