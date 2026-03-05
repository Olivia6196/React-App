import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Portfolio from "../assets/Portfolio_pic.png";
import Todo from "../assets/Todo_pics .png";
import Quiz from "../assets/quiz_app.png";
import Branding from "../assets/branding_agency.png";
import Digital from "../assets/digital_clock.png";
import Weather from "../assets/weather_app.png";
import Lxxi from "../assets/LXXI.png";

export default function Project() {
  const projects = [
    { img: Portfolio, title: "Portfolio Website", link: "https://olivia6196.github.io/Fabulous/" },
    { img: Todo, title: "My To-Do List App", link: "https://olivia6196.github.io/To-Do-List-/" },
    { img: Quiz, title: "Quiz App", link: "https://olivia6196.github.io/Quiz-App/" },
    { img: Branding, title: "Branding Agency", link: "https://olivia6196.github.io/Branding-Agency/" },
    { img: Digital, title: "Digital Clock", link: "https://olivia6196.github.io/Digital-Clock/" },
    { img: Weather, title: "Weather App", link: "https://weather-app-theta-livid-30.vercel.app"},
    { img: Lxxi, title: "LXXI Company", link: "https://lxxi.vercel.app"}
  ];

  return (
    <section id="Projects" className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-top pb-12 px-10 md:px-20 lg:px-0">
      <h2 className="text-center text-3xl font-semibold pb-8 drop-shadow-[0_0_4px_#ec4899]">My Project</h2>

      <div className="relative w-[80vw] md:w-full max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation={true}
          slidesPerView={1} // mobile default
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            350: { slidesPerView: 1, navigation: false,},
            768: { slidesPerView: 2, navigation: false, },
            1024: { slidesPerView: 3, navigation: true, },
          }}
          className="py-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 border-white p-6 rounded-xl bg-white shadow-[0_0_35px_pink] flex flex-col items-center">
                <img src={project.img} alt={project.title} className="w-[20vw] h-[14vw] rounded-lg object-cover" />
                <h3 className="text-xl font-semibold pt-4">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-red-300 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-pink-400/50 hover:bg-transparent hover:text-red-300 hover:border hover:border-red-300 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}