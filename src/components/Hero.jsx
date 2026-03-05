import Pink from "../assets/laptop_pink.jpg"
export default function Hero(){
    return(
        <>
        <div className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center flex pt-32 ">
            <div className="pl-48 pr-48">
                <h1 className="pt-20 pb-2 text-3xl font-semibold">Hi, I'm Olivia<span><i class='bx bxs-heart bx-tada text-red-300 text-4xl align-middle drop-shadow-lg'></i></span></h1>
                <p className="pb-8 font-livia text-xl">The mind behind Livicodes, crafting beautiful websites.</p>
                <button className="mt-8"> <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className=" group bg-red-300 text-white p-5 rounded-lg font-semibold border-2 border-transparent shadow-lg shadow-red-500/50 hover:bg-transparent hover:text-black hover:border-red-300 hover:shadow-red-400 transition-shadow transition-colors duration-300 ">View My Works <i class='bx bxl-github bg-black group-hover:bg-white rounded-full align-middle'></i></a></button>
            </div>
            <div>
                <img src={Pink} alt="profile picture" className="w-[25vw] h-[27vw] rounded-full " />
            </div>
        </div>
        </>
    )
}