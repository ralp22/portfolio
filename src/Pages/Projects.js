import { motion, AnimatePresence } from "framer-motion";
import Contact from "../Components/Contact";
import { useState } from "react";
import projects from "../assets/images"
import { FaLink } from "react-icons/fa"

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);
 

  return (
    <div>
      <motion.div className="font-serif text-white flex flex-col h-[150px] bg-gradient-to-tr from-orange-400 to-yellow-600 self-center justify-center ">
        <motion.h1 className="self-center text-center justify-center underline underline-offset-[12px] text-[45px] font-bold">
          Ryan Halpert
        </motion.h1>
        <motion.h1 className="self-center text-center justify-center text-[30px]">
          Software Developer
        </motion.h1>
      </motion.div>

      <div className="flex flex-col justify-center bg-gradient-to-tr from-blue-500 to-teal-800 h-[100px] w-auto shadow-sm shadow-black">
        <h1
          style={{ textShadow: "2px 2px 4px black" }}
          className="text-center snap-center font-serif text-4xl text-white"
        >
          Projects
        </h1>
      </div>

      <div className="container">
        {projects.map((project) => {
          return (
            <motion.div className="item">
              <img className="item-img" src={project.image} />
              <motion.div className="flex flex-col items-center -translate-y-[200px] text-[12px] bg-white rounded-lg opacity-0 hover:opacity-75">
              <motion.div className="h-40 w-auto">{project.details}</motion.div>
              <a href={project.link}><FaLink size="32"/></a>
            </motion.div>
            
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Contact
            key="contact-modal"
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>

      <motion.footer className="z-20 h-[150px] p-4 bg-gradient-to-tr from-orange-400 to-yellow-600 self-center justify-center">
        <motion.div className="flex flex-row justify-center my-4">
          <a href="https://linkedin.com/in/rhalpert/">
            <motion.img
              whileTap={{scale: '95%'}}
              className="h-[80px] w-[80px] mx-4 rounded-[50%] object-contain hover:shadow-white hover:shadow-md"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            />
          </a>
          <a href="https://github.com/ralp22">
            <motion.img
              whileTap={{scale: '95%'}}
              className="h-[80px] w-[80px] mx-4 rounded-[50%] object-contain hover:shadow-white hover:shadow-md"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
          <motion.img
            whileTap={{scale: '95%'}}
            onClick={() => (modalOpen ? close() : open())}
            className="h-[80px] w-[80px] mx-4 rounded-[50%] object-cover hover:shadow-white hover:shadow-md"
            src="https://i.imgur.com/boDYvZH.png"
          />
        </motion.div>
      </motion.footer>
    </div>
  );
}
