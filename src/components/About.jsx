import { TypeAnimation } from "react-type-animation";

const skills = [
  { name: "HTML", icon: "bxl-html5" },
  { name: "CSS", icon: "bxl-css3" },
  { name: "JavaScript", icon: "bxl-javascript" },
  { name: "Tailwindcss", icon: "bxl-tailwind-css" },
  { name: "React", icon: "bxl-react" },
  { name: "GitHub", icon: "bxl-github" },
];

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
        <p className="text-center pb-12 text-sm lg:text-base w-[85vw] md:w-full"> I am a Frontend Developer with a strong interest in creating clean, responsive, and user-friendly websites. <br /> I love turning ideas into reality through code.</p>
        <div className="justify-center pb-8 grid grid-cols-2 md:grid-cols-3 mx-20 lg:mx-28 gap-12 lg:gap-8">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  className="text-black p-3 lg:p-5 w-36 lg:w-full rounded-full font-semibold border-2 border-red-300 hover:text-white hover:bg-red-300 transition-colors duration-300"
                >
                  {skill.name}
                  <i className={`bx ${skill.icon} text-2xl align-middle`}></i>
                </button>
              ))}
        </div>
        </section>
        </>
    )
}