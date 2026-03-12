import { FaGithub } from "react-icons/fa"
import Pink from "../assets/laptop_pink.jpg"
import { ImHeart } from "react-icons/im"
export default function Hero(){
    return(
        <>
        <div className="bg-[url(/background.png)]  bg-cover bg-no-repeat bg-center flex flex-col lg:flex-row pt-16 lg:pt-32 gap-16 md:gap-32 lg:gap-0">
            <div className="px-12 lg:px-48">
                <h1 className="pt-20 pb-2 text-4xl lg:text-3xl font-semibold">Hi, I'm Olivia <span><ImHeart className='inline text-red-300 text-3xl align-middle animate-bounce drop-shadow-lg'/></span></h1>
                <p className="pb-8 font-livia text-xl">The mind behind Livicodes, crafting beautiful websites.</p>
                <button className="mt-8"> <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className=" group bg-red-300 text-white p-5 rounded-lg font-semibold border-2 border-transparent shadow-lg shadow-red-500/50 hover:bg-transparent hover:text-black hover:border-red-300 hover:shadow-red-400 transition-shadow transition-colors duration-300 ">View My Works <FaGithub className= 'inline bg-black group-hover:bg-white rounded-full align-middle'/></a></button>
            </div>
            <div>
                <img src={Pink} alt="profile picture" className="w-[70vw] md:w-1/2 lg:w-[25vw] lg:h-[27vw] rounded-lg lg:rounded-full ml-12 md:ml-20 lg:m-0" />
            </div>
        </div>
        </>
    )
}