import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "JavaScript", level: 92 },
  { name: "Next.js", level: 65 },
  { name: "Tailwind CSS", level: 90 },
  { name: "React", level: 75 },
  { name: "HTML", level: 99 },
  { name: "Node.js", level: 55 },
  { name: "Github", level: 82 },
  { name: "CSS", level: 99 },
];

const professionalSkills = [
  { name: "Listening", level: 99 },
  { name: "Communication", level: 80 },
  { name: "Collaboration & Problem-Solving", level: 87 },
  { name: "Adaptability", level: 70 },
  { name: "Creativity & Time Management", level: 98 },
  { name: "Learning", level: 95 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [techCounters, setTechCounters] = useState(technicalSkills.map(() => 0));
  const [proCounters, setProCounters] = useState(professionalSkills.map(() => 0));

  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  // Trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Animate Technical Skills
  useEffect(() => {
    if (!visible) return;
    const intervals = technicalSkills.map((skill, index) => {
      return setInterval(() => {
        setTechCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < skill.level) newCounters[index] += 1;
          return newCounters;
        });
      }, 15);
    });
    return () => intervals.forEach((i) => clearInterval(i));
  }, [visible]);

  // Animate Professional Skills
  useEffect(() => {
    if (!visible) return;
    const intervals = professionalSkills.map((skill, index) => {
      return setInterval(() => {
        setProCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < skill.level) newCounters[index] += 1;
          return newCounters;
        });
      }, 15);
    });
    return () => intervals.forEach((i) => clearInterval(i));
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="pt-28 px-6 md:px-16 lg:px-32 xl:px-40 bg-[url('/background.png')] bg-cover bg-no-repeat pb-7"
    >
      {/* Technical Skills */}
      <h2 className="text-3xl font-semibold text-center mb-6 drop-shadow-[0_0_2px_#ec4899]">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {technicalSkills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">{skill.name}</span>
              <span className="text-gray-800 font-medium">{techCounters[index]}%</span>
            </div>
            <div className="w-full h-4 bg-gray-300 rounded-full">
              <div
                className="h-4 bg-red-300 rounded-full"
                style={{ width: `${techCounters[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Skills */}
      <h2 className="text-3xl font-semibold text-center mb-8 drop-shadow-[0_0_2px_#ec4899]">
        Professional Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {professionalSkills.map((skill, index) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx={50}
                  cy={50}
                  r={radius}
                  strokeWidth="8"
                  stroke="#e5e7eb" // Tailwind gray-300
                  fill="transparent"
                />
                {/* Foreground circle */}
                <circle
                  cx={50}
                  cy={50}
                  r={radius}
                  strokeWidth="8"
                  stroke="#f87171" // Tailwind red-300
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - proCounters[index] / 100)}
                  strokeLinecap="round"
                />
              </svg>
              {/* Animated number */}
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-800">
                {proCounters[index]}%
              </span>
            </div>
            <p className="text-center mt-2 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}