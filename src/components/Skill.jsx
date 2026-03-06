const skills = [
  { name: "HTML", icon: "bxl-html5" },
  { name: "CSS", icon: "bxl-css3" },
  { name: "JavaScript", icon: "bxl-javascript" },
  { name: "Tailwindcss", icon: "bxl-tailwind-css" },
  { name: "React", icon: "bxl-react" },
  { name: "GitHub", icon: "bxl-github" },
];

const Skill = () => {
  return (
    <section id="Skill" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-20">
        <h2 className="text-center text-3xl font-semibold pb-6 drop-shadow-[0_0_4px_#ec4899]">My Skills</h2>
        <div className="justify-center pb-8 grid grid-cols-2 md:grid-cols-3 mx-5 md:mx-20 lg:mx-28 gap-12 lg:gap-8">
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
  )
}

export default Skill