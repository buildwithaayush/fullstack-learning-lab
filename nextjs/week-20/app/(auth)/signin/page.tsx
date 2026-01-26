export default function Signin(){
    return(<> 
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-slate-100 rounded-md flex flex-col ">
            <p className="text-5xl font-bold ml-25">Signin</p>
            <input className="text-3xl p-4 m-1 rounded-md  border"type="text" placeholder="username" />
            <input className="text-3xl p-4 m-1 rounded-md  border" type="password" placeholder="password" />

            <button className="text-3xl p-4 m-1 rounded-md hover:bg-blue-100">Sign in</button>
        </div>
    </div>
    </>)
}