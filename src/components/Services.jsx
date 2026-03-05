import Web from "../assets/web_design.png"
import Frontend from "../assets/frontend_pic.png"
import Ux from "..//assets/ux_design.png"

const projects = [
  {
    img: Web,
    title: "Web Design",
    description: "Modern and Responsive",
    link: "https://olivia6196.github.io/Picto/",
    padding: "px-20",
  },
  {
    img: Frontend,
    title: "Frontend Development",
    description: "Interactive and Dynamic",
    link: "https://olivia6196.github.io/Simple-Calculator/",
    padding: "px-14",
  },
  {
    img: Ux,
    title: "UI/UX Designs",
    description: "User-centered Designs",
    link: "https://olivia6196.github.io/Analog-Clock/",
    padding: "px-20",
  },
];

export default function Services(){
    return(
        <>
        <section id="Services" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-20 pb-32">
        <h2 className="text-center text-3xl font-semibold pb-20 drop-shadow-[0_0_4px_#ec4899]">What I Do</h2>
        <div className="flex flex-col w-[65vw] lg:w-full lg:flex-row justify-center gap-8 text-center px-12vw lg:px-0 mx-auto">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`border-2 border-white py-8 ${project.padding} rounded-xl bg-white shadow-[0_0_10px_black]`}
                >
                    <img src={project.img} alt={project.title} className="w-20 mx-auto" />

                    <h3 className="pt-4 text-xl font-semibold pb-3">
                    {project.title}
                    </h3>

                    <p>{project.description}</p>

                    <button className="mt-8 mb-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-300 text-white p-4 rounded-lg font-semibold border-2 border-transparent shadow-lg shadow-red-500/50 hover:bg-transparent hover:text-black hover:border-red-300 hover:shadow-red-400 transition-shadow transition-colors duration-300"
                    >
                        View Project
                    </a>
                    </button>
                </div>
                ))}
        </div>
        </section>
        </>
    )
}