import { BsJavascript } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaGithub, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <DiCss3 /> },
  { name: "JavaScript", icon: <BsJavascript /> },
  { name: "Tailwindcss", icon: <RiTailwindCssFill /> },
  { name: "React", icon: <FaReact /> },
  { name: "GitHub", icon: <FaGithub /> },
];
const Skill = () => {
  return (
    <section id="Skill" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-20">
        <h2 className="text-center text-3xl font-semibold pb-6 drop-shadow-[0_0_4px_#ec4899]">My Skills</h2>
        <div className="justify-center pb-8 grid grid-cols-2 md:grid-cols-3 mx-5 md:mx-20 lg:mx-28 gap-12 lg:gap-8">
              {skills.map((skill, index) => (
                <button
                    className="flex items-center justify-center gap-2 text-black text-xl p-3 lg:p-5 w-36 lg:w-full rounded-full font-semibold border-2 border-red-300 hover:text-white hover:bg-red-300 transition-colors duration-300"
                  >
                    {skill.name}
                    {skill.icon}
                  </button>
              ))}
        </div>
    </section>
  )
}

export default Skill