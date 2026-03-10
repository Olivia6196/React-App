import Pink from "../assets/Pink_pics.jpg"

const About = () => {

  const aboutCards = [
    {
      title: "My Passion",
      text: `My passion for web development stems from the joy of creating something from scratch and seeing it come to life on the screen. I love the blend of creativity and logic that web development offers, allowing me to express myself through design while also solving complex problems with code. Whether it's a simple portfolio site or a complex web application, I am passionate about delivering high-quality work that meets the needs of users and exceeds their expectations.`
    },
    {
      title: "My Vision",
      text: `My vision as a web developer is to create innovative and impactful web experiences that enhance the way people interact with technology. I believe in the power of technology to connect people and improve lives, and I want to contribute to that by creating meaningful digital products. I am committed to continuous learning and improvement, and I look forward to the opportunities and challenges that lie ahead in my journey as a web developer.`
    },
    {
      title: "My Goals",
      text: `My goals as a web developer include continuously improving my skills and knowledge in frontend development, staying up-to-date with the latest technologies and trends in the industry. I aim to work on diverse projects that challenge me and allow me to grow as a developer. Additionally, I want to contribute to the web development community by sharing my knowledge and experiences through blogging, open-source contributions, or speaking at events.`
    },
    {
      title: "My Values",
      text: `My values as a web developer include a commitment to quality, creativity, and continuous learning. I believe in writing clean, maintainable code that follows best practices and delivers a great user experience. I value creativity and strive to bring unique and innovative ideas to my projects. I also believe in the importance of collaboration and communication, as working with others can lead to better outcomes and foster a positive work environment.`
    }
  ]

  return (
    <section className="bg-[url(/background.png)] bg-cover bg-no-repeat bg-center pt-28 px-6 md:px-16 lg:px-32 xl:px-40">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 pb-12 md:pb-24 max-w-7xl mx-auto">

        <div className="w-full max-w-sm">
          <img src={Pink} alt="picture" className="rounded-3xl w-full"/>
        </div>

        <div className="lg:w-[46vw]">

          <div>
            <h2 className="italic text-center text-3xl font-semibold pb-6 drop-shadow-[0_0_1px_#ec4899]">
              About Me
            </h2>

            <p className="pb-4 border-b-2 border-gray-900 md:border-b-0">
              Hi, I'm Olivia, a passionate Frontend Developer with a knack for crafting beautiful and functional websites.
              I enjoy building websites that are not only beautiful but also intuitive and accessible to users across different devices.
              I thrive on creativity and problem-solving, always eager to learn and grow in the ever-evolving world of web development.
              When I'm not coding, you can find me exploring new technologies or indulging in my love for design.
              Let's create something amazing together!
            </p>
          </div>

          <div>
            <h2 className="italic text-center text-3xl font-semibold pt-8 md:pt-0 pb-6 drop-shadow-[0_0_1px_#ec4899]">
              My Journey
            </h2>

            <p className="pb-4 border-b-2 border-gray-900 md:border-b-0">
              While my academic background is in science, my curiosity for how websites are built and function led me to learn web development.
              What started as a simple interest slowly became a passion. I started learning HTML and CSS, which laid the foundation for my understanding of web design and structure.
              As I delved deeper, I discovered JavaScript, which opened up a world of interactivity and dynamic content on the web.
              I then explored React, a powerful JavaScript library for building user interfaces, which allowed me to create more complex and responsive web applications.
              Along the way, I have worked on various projects that have helped me hone my skills and gain practical experience in frontend development.
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 text-left md:text-center max-w-6xl mx-auto pb-20">

        {aboutCards.map((card, index) => (
          <div
            key={index}
            className="border-2 border-white bg-white rounded-xl px-6 py-5 shadow-[0_0_18px_black]"
          >
            <h2 className="text-center text-2xl font-semibold pb-6 drop-shadow-[0_0_2px_#ec4899]">
              {card.title}
            </h2>

            <p>{card.text}</p>
          </div>
        ))}

      </div>

      <div className="pb-3 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-semibold pb-6 drop-shadow-[0_0_2px_#ec4899]">
          My Education
        </h2>

        <p className="text-center">
          <em className="font-livia text-3xl leading-4">
            Bachelor of Science (B.Sc.) – Anatomy.
          </em>

          <br />

          My academic training helped me develop strong analytical thinking,
          attention to detail, and research skills. These abilities have been
          valuable in my transition into web development, where problem-solving
          and logical thinking are essential.

          I am grateful for the diverse knowledge and skills I gained during my
          studies, which have contributed to my growth as a web developer.
          My education has provided me with a unique perspective and a strong
          foundation that I continue to build upon in my journey as a developer.
        </p>
      </div>

    </section>
  )
}

export default About