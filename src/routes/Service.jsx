import Web from "../assets/web_design.png";
import Frontend from "../assets/frontend_pic.png";
import Ux from "../assets/ux_design.png";

const services = [
  {
    img: Web,
    title: "Web Design",
    icon:"💻",
    shortDesc: "Modern and Responsive",
    longDesc:
      "I create fully responsive websites that look amazing on all devices. Each design focuses on clarity, branding, and user engagement.",
    features: ["Responsive layouts", "SEO-friendly", "Cross-browser compatibility"],
    exampleLink: "https://olivia6196.github.io/Picto/",
  },
  {
    img: Frontend,
    title: "Frontend Development",
    icon: "⚡",
    shortDesc: "Interactive and Dynamic",
    longDesc:
      "I build interactive web interfaces using modern JavaScript frameworks, ensuring smooth user experiences and efficient performance.",
    features: ["React & Next.js", "Tailwind CSS ", "Reusable components"],
    exampleLink: "https://olivia6196.github.io/Simple-Calculator/",
  },
  {
    img: Ux,
    title: "UI/UX Designs",
    icon: "🎨",
    shortDesc: "User-centered Designs",
    longDesc:
      "I design intuitive and visually appealing interfaces that prioritize the user journey, accessibility, and engagement.",
    features: ["Wireframes & Prototypes", "Figma & Adobe XD", "User testing insights"],
    exampleLink: "https://olivia6196.github.io/Analog-Clock/",
  },
];

export default function Service() {
  return (
    <section className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-20 pb-32">
      {/* Page Title */}
      <h2 className="text-3xl font-semibold text-center py-10 drop-shadow-[0_0_2px_#ec4899]">
        What I Do
      </h2>

      {/* Services List */}
      <div className="flex flex-col gap-16 w-[80vw] lg:w-[50vw] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 p-6 rounded-xl shadow-[0_0_15px_black] bg-white/45 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-48 h-48 object-contain mx-auto"
            />

            {/* Service Details */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-semibold pb-4">{service.title}
                <span className="inline-block animate-bounce">{service.icon}</span></h3>
              <p className="pb-4">{service.longDesc}</p>

              {/* Features List */}
              <ul className="list-disc list-inside pb-4">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Example Project Link */}
              <a
                href={service.exampleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-300 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-transparent hover:text-red-300 border-2 border-red-300 transition duration-300"
              >
                View Example
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}