import ProjectModal from "./components/ProjectModal";
import { useState } from "react";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Anemic Heroes",
      image: "/public/anemic-heroes-screenshot-min.jpg",
      description:
        "A dungeon crawler with quests and combat built in a 5-person team.",
      extraText:
        "Made as a group of 5 from school. I stood for the battle screen which you see here. Very fun and educating experience",
      repo: "https://github.com/AnemicGames/AnemicHeroes",
      live: "https://anemic-heroes.netlify.app/",
    },
    {
      title: "Online Shop",
      image: "/public/js-2-frameworks-pic.jpg",
      description:
        "My first experience with React. This project taught me about components, states, props, and how to build fast, dynamic UIs.",
      extraText:
        "Very educational project where I learnt a lot about hooks, components and zustand store management",
      repo: "https://github.com/BerkenA/react-ca",
      live: "https://berks-onlineshop.netlify.app/",
    },
    {
      title: "Holidaze",
      image: "/public/holidaze-picture-portfolio-min.jpg",
      description:
        "This was my final exam project, Holidaze! a full-featured React booking app using TailwindCSS and date libraries for seamless vacations.",
      extraText:
        "This was a good learning experience in how to use react with datePicker to make a booking website",
      repo: "https://github.com/BerkenA/berken-holiday-exam",
      live: "https://holidaze-b.netlify.app/",
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <>
      <div
        className="mainContainer w-full max-w-screen-lg mx-auto bg-black"
        id="home"
      >
        <div className="contentContainer flex justify-center">
          <div className="mainSection flex flex-col-reverse md:flex-row md:items-center mt-24 gap-8 pb-4 w-full">
            <div className="aboutMe text-center md:text-left md:w-1/2">
              <h1 className="text-4xl text-gray-200 mb-4">
                Front-End Developer{" "}
                <i
                  className="fa-solid fa-code"
                  style={{ color: "#f7df1e" }}
                ></i>
              </h1>
              <p className="text-2xl text-gray-200 mb-6">
                Hi! My name is Berken Ates and I am a skilled front-end
                developer based in Oslo, Norway!{" "}
                <i
                  className="fa-solid fa-face-smile"
                  style={{ color: "#f7df1e" }}
                ></i>
              </p>
              <span className="centerGitLink flex justify-center md:justify-start gap-8 text-gray-200 text-2xl">
                <a
                  href="https://no.linkedin.com/in/berken-ates-0a9281171"
                  aria-label="click here to go to my linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="https://github.com/BerkenA"
                  aria-label="click here to go to my github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>
              </span>
            </div>

            <div className="mePicture flex justify-center md:w-1/2">
              <img
                src="/public/picture-me.jpg"
                alt="picture of me"
                className="w-44 h-44 md:w-64 md:h-64 rounded-full border-4 border-gray-700 animate-pulse"
                style={{ animationTimingFunction: "ease-in-out" }}
              />
            </div>
          </div>
        </div>

        <div className="mySkills text-gray-200 text-2xl flex flex-col items-center mt-8 md:flex-row md:items-center  gap-8">
          <p className="underline mb-4 md:mb-0 md:mr-8">Skills</p>
          <ul className="skillLogos flex gap-12 p-0 list-none">
            <li>
              <i
                className="fa-brands fa-figma fa-2xl"
                style={{ color: "#B197FC" }}
              ></i>
            </li>
            <li>
              <i
                className="fa-brands fa-html5 fa-2xl"
                style={{ color: "#e34c26" }}
              ></i>
            </li>
            <li>
              <i
                className="fa-brands fa-css3-alt fa-2xl"
                style={{ color: "#264de4" }}
              ></i>
            </li>
            <li>
              <i
                className="fa-brands fa-js fa-2xl"
                style={{ color: "#f7df1e" }}
              ></i>
            </li>
          </ul>
        </div>
        <div id="about"></div>
        <div className="about bg-transparent w-full">
          <div className="container max-w-screen-lg mx-auto px-4">
            <div className="knowMe flex flex-col-reverse md:flex-row md:items-center mt-24 gap-8 pb-4 w-full">
              <div className="picturePc flex justify-center md:w-1/2">
                <img
                  src="/public/computer-picture-white.jpg"
                  alt="picture of a computer in beautiful surroundings"
                  className=" rounded-lg object-cover"
                />
              </div>

              <div className="textMe text-center md:text-left md:w-1/2 text-gray-200">
                <h1 className="text-4xl mb-4">About</h1>
                <h4 className="text-2xl mb-4 text-yellow-400">
                  Front-end Developer
                  <br />
                  based in Oslo, Norway{" "}
                  <img
                    src="/public/norway.png"
                    alt="norwegian flag"
                    className="inline-block w-6 h-6 ml-2 align-middle"
                  />
                </h4>
                <p className="text-lg leading-relaxed">
                  I'm a skilled front-end developer, with expertise in Figma,
                  HTML, CSS, and JavaScript. Including Framworks like
                  tailwindCSS and React. Passionate about crafting exceptional
                  user experiences, I dedicate myself to creating websites that
                  captivate and engage users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col" id="projects">
          <h1 className="text-white text-4xl mt-16 mb-16 self-center">
            Projects
          </h1>

          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="cursor-pointer mb-16 border border-gray-700 p-6 rounded-lg shadow-lg bg-yellow-400 hover:bg-yellow-300 transition"
            >
              <img
                src={project.image}
                alt={`screenshot of ${project.title}`}
                className="w-full h-auto rounded-md mb-6"
              />
              <div className="flex items-center justify-center mb-4">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
              </div>
              <p className="text-center mb-4">{project.description}</p>
              <ul className="flex justify-center gap-6">
                <li>
                  <span className="text-black underline cursor-pointer">
                    Click to see more!
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center py-8 px-4 bg-black text-gray-200"
          id="contact"
        >
          <div className="w-full max-w-3xl flex flex-col items-center">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold mb-2">Contact</h1>
              <p className="text-yellow-400 text-lg">
                If you found my portfolio interesting, hit me up!
              </p>
            </div>
            <div className="flex justify-center space-x-8 text-2xl">
              <a
                href="mailto:berken_93@hotmail.com?subject=Berken Ates portfolio&body=Your message here."
                aria-label="click here to send me an email"
                className="hover:text-yellow-400 transition-colors"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://no.linkedin.com/in/berken-ates-0a9281171"
                aria-label="click here to go to my linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://github.com/BerkenA"
                aria-label="click here to go to my github"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <ProjectModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={activeProject?.title}
          extraText={activeProject?.extraText}
          image={activeProject?.image}
          description={activeProject?.description}
          repo={activeProject?.repo}
          live={activeProject?.live}
        />
      </div>
    </>
  );
}

export default Home;
