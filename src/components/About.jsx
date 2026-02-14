import { TypeAnimation } from "react-type-animation";

export default function About(){
    return(
        <>
        <section id="About" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-20">
        <h2 className="text-center text-3xl font-semibold pb-6 drop-shadow-[0_0_4px_#ec4899]">About Me</h2>
        <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,           
          "Web Designer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="block text-center mx-auto text-2xl text-red-400 pb-5 font-semibold font-livia"
      />
        <p className="text-center pb-12"> I am a Frontend Developer with a strong interest in creating clean, responsive, and user-friendly websites. <br /> I love turning ideas into reality through code.</p>
        <div className="justify-center pb-8 flex gap-8">
            <button className=" text-black p-5 rounded-full font-semibold border-2 border-red-300  hover:text-white hover:bg-red-300  transition-colors duration-300 ">HTML<i class='bx bxl-html5 text-2xl align-middle'></i></button>
            <button className=" text-black p-5 rounded-full font-semibold border-2 border-red-300  hover:text-white hover:bg-red-300  transition-colors duration-300 ">CSS<i class='bx bxl-css3 text-2xl align-middle'></i></button>
            <button className=" text-black p-5 rounded-full font-semibold border-2 border-red-300  hover:text-white hover:bg-red-300  transition-colors duration-300 ">JavaScript<i class='bx bxl-javascript text-2xl align-middle' ></i></button>
            <button className=" text-black p-5 rounded-full font-semibold border-2 border-red-300  hover:text-white hover:bg-red-300  transition-colors duration-300 ">Tailwindcss<i class='bx bxl-tailwind-css text-2xl align-middle' ></i></button>
            <button className=" text-black p-5 rounded-full font-semibold border-2 border-red-300  hover:text-white hover:bg-red-300  transition-colors duration-300 ">React<i class='bx bxl-react text-2xl align-middle' ></i></button>
        </div>
        </section>
        </>
    )
}