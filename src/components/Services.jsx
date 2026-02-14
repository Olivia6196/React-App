import Web from "../assets/web design.png"
import Frontend from "../assets/frontend pic.png"
import Ux from "..//assets/ux design.png"
export default function Services(){
    return(
        <>
        <section id="Services" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-20 pb-32">
        <h2 className="text-center text-3xl font-semibold pb-20 drop-shadow-[0_0_4px_#ec4899]">What I Do</h2>
        <div className="flex justify-center gap-8 text-center">
            <div className="border-2 border-white py-8 px-20 rounded-xl bg-white shadow-[0_0_10px_black]">
                <img src={Web} alt="Web Design" className="w-20 mx-auto"/>
                <h3 className="pt-4 text-xl font-semibold pb-3">Web Design</h3>
                <p>Modern and Responsive</p>
                <button className="mt-8 mb-4"><a href="https://olivia6196.github.io/Picto/" target="-blank" rel="noopener noreferrer" className="bg-red-300 text-white p-4 rounded-lg font-semibold border-2 border-transparent shadow-lg shadow-red-500/50 hover:bg-transparent hover:text-black hover:border-red-300 hover:shadow-red-400 transition-shadow transition-colors duration-300">View Project</a></button>
            </div>
            <div className="border-2 border-white py-8 px-14 rounded-xl bg-white shadow-[0_0_10px_black]">
                <img src={Frontend} alt="Frontend Development" className="w-20 mx-auto"/>
                <h3 className="pt-4 text-xl font-semibold pb-3">Frontend Development</h3>
                <p>Interactive and Dynamic</p>
                 <button  className="mt-8 mb-4"><a href="https://olivia6196.github.io/Simple-Calculator/" target="-blank" rel="noopener noreferrer" className="bg-red-300 text-white p-4 rounded-lg font-semibold border-2 border-transparent shadow-lg shadow-red-500/50 hover:bg-transparent hover:text-black hover:border-red-300 hover:shadow-red-400 transition-shadow transition-colors duration-300">View Project</a></button>
            </div>
            <div className="border-2 border-white py-8 px-20 rounded-xl bg-white shadow-[0_0_10px_black]">
                <img src={Ux} alt="UI/UX Design" className="w-20 mx-auto"/>
                <h3 className="pt-4 text-xl font-semibold pb-3">UI/UX Designs</h3>
                <p>User-centered Designs</p>
                <button  className="mt-8 mb-4"><a href="https://olivia6196.github.io/Analog-Clock/" target="-blank" rel="noopener noreferrer" className="bg-red-300 text-white p-4 rounded-lg font-semibold border-2 border-transparent shadow-lg shadow-red-500/50 hover:bg-transparent hover:text-black hover:border-red-300 hover:shadow-red-400 transition-shadow transition-colors duration-300">View Project</a></button>
            </div>
        </div>
        </section>
        </>
    )
}