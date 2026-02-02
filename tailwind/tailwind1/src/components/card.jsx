function Card(){

    return(
        <>
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="../../img/card.jpeg" alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Ayush Singh</p>
                    <p className="font-medium text-gray-500">Frontend developer</p>
                </div>
                <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-xl p-1">Message</button>
            </div>
        </div>

        <button className="outline outline-2 outline-blue-500 m-5 rounded-md px-1 ">Click Me</button>
        <div className="mx-auto w-1/2 bg-green-200">Centered me</div>
        <div className="max-w-5xl mx-auto px-4 bg-blue-200">Page content</div>
        <div className="w-full md:w-1/2 mx-auto bg-red-100">Responsive box</div>
        <div className="max-w-md  mx-auto outline outline-2 outline-green-700 rounded-md px-2">Content</div>
        <div className="flex overflow-x-auto">
            <div className="min-w-[250px] bg-blue-200">Card 1</div>
            <div className="min-w-[250px] bg-green-200">Card 2 </div>
            
        </div>

        {/* <div className="max-h-64  max-w-64 overflow-y-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repellendus ullam assumenda perferendis dolorum vitae unde distinctio, ratione similique tenetur totam necessitatibus laboriosam natus neque non voluptatum tempora impedit rerum provident harum libero, laudantium perspiciatis ducimus. Veritatis, iusto beatae quasi quaerat corporis est culpa dolore error minima itaque quod? Ratione nihil ea a totam corrupti molestiae omnis exercitationem, ex at quam sit id vero quis dolor dolore minus. Ea explicabo soluta maxime odit. Totam, nesciunt! Odit repellendus eius consequatur neque nostrum, fuga quia dicta ab! Expedita laudantium consequuntur nam fugiat accusamus officia asperiores, repudiandae, dolores tempore quam unde deleniti exercitationem, optio numquam recusandae quo quis. At consequuntur totam ipsam quae magni. Dignissimos quasi accusamus voluptate beatae officiis corporis reiciendis minima magnam recusandae ab doloribus eligendi esse et voluptatibus nesciunt ad facilis perferendis, laudantium illum, eveniet ducimus nihil tenetur ea. Dolorum, architecto! Iure, ea adipisci omnis sit nam reiciendis non cum ex explicabo mollitia minima laudantium quos neque quasi? Dolorem, aut exercitationem. Rem, tenetur adipisci in maiores unde eaque, enim debitis placeat error quia, illum quas mollitia. Dolore magni in consequatur non debitis. Ad magni laborum dolorem nemo quis reiciendis illum.
        </div>

        <div className="min-h-screen bg-yellow-200">
        full page height
        </div> */}

        {/* centered layout
        
        
        */}

        <div className="max-w-6xl mx-auto min-h-screen bg-yellow-100"></div>

        <div className="max-h-[400px] max-w-4xl overflow-y-auto bg-red-100">

          </div> 

          <div></div>
        </>
    )
}

export default Card;
