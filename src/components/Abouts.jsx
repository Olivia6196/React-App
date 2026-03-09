import { TypeAnimation } from "react-type-animation";

export default function Abouts(){
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
        <p className="text-center pb-12 text-sm lg:text-base w-[85vw] md:w-full pl-10 lg:pl-0"> I am a Frontend Developer with a strong interest in creating clean, responsive, and user-friendly websites. <br /> I love turning ideas into reality through code.</p>
        </section>
        </>
    )
}