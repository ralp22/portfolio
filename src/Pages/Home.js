import React, { useState, useCallback } from "react";
import Contact from "../Components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import logos from '../assets/logos'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"

export default function Home() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    console.log(container);
}, []);
 

  const [modalOpen, setModalOpen] = useState(false);
  const close = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  return (
    <div class="font-serif text-white">

      <motion.div className="flex flex-col h-[150px] bg-gradient-to-tr from-orange-400 to-yellow-600 self-center justify-center">
        <motion.h1 className="self-center text-center justify-center underline underline-offset-[12px] text-[45px] font-bold">
          Ryan Halpert
        </motion.h1>
        <motion.h1 className="self-center text-center justify-center text-[30px]">
          Software Developer
        </motion.h1>
      </motion.div>

      <div className="flex flex-col justify-center bg-gradient-to-tr from-blue-500 to-teal-800 h-[100px] w-auto shadow-sm shadow-black">
        <h1 style={{textShadow: "2px 2px 4px black"}} className="text-center snap-center font-serif text-4xl text-white">My Profile</h1>
        </div>
      

      <motion.div class="flex flex-row mx-4"
      >
        
        <motion.div className="relative">
          <motion.img
            animate={{ x: 100 }}
            className="avatar"
            src="https://i.imgur.com/1PvxWE3.jpg"
          />
        </motion.div>

        <motion.figure
          animate={{ x: '12.5vw' }}
          class="mt-32"
        >
          <section class="bg-gradient-to-br from-gray-400 to-gray-500 rounded-md p-8 hover:shadow-lg hover:shadow-slate-950 h-[350px] w-[600px] hover:scale-[105%] hover:transition-all duration-500">
            <figcaption class="font-bold text-2xl">About Me</figcaption>
            <motion.article class="text-[14px] content-evenly my-4 h-[200px] w-[400px] m-12">
              Of what I have done in the past, my crowning achievements involve
              having been able to help people solve problems, whether it was an
              immediate issue or something that needed a long-term solution.
              This inspired me to become a software engineer because I
              understand that my ability to quickly identify problems,
              remain patient in dealing with errors, and be immersed in the
              journey of solving them will be greatly useful in this field. I
              transitioned by beginning to learn HTML, CSS and JavaScript
              through General Assembly’s dash courses, which made me fall in
              love and want to jump head first into software engineering through
              the SEIR program.
            </motion.article>
          </section>
          
        </motion.figure>
      </motion.div>
      
      <motion.button
            onClick={() => (modalOpen ? close() : open())}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ x: '64vw' }}
            className="contact-btn duration-500"
          >
            Send Coding Challenge
          </motion.button>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Contact
            key="contact-modal"
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>


      <motion.div className="text-center">
        <motion.div className="justify-center p-4 w-full flex flex-row bg-gradient-to-tr from-blue-500 to-teal-800">
          
        {
          logos.map((logo)=>{
            return(
              <div className="">
                <img src={logo.pic} className="h-[4rem] mx-4 rounded-full" alt='pic'/>
                <motion.h1 whileHover={{opacity: 1, translateY: 10}} className="-translate-y-10 h-full w-full opacity-0 hover:opacity-[1] self-center justify-center font-[Roboto] text-[12px]">{logo.text}</motion.h1>
              </div>
            )
          })
        }

        </motion.div>
      </motion.div>

      <motion.footer className="h-[150px] p-4 bg-gradient-to-tr from-orange-400 to-yellow-600 self-center justify-center">
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
            src="https://i.imgur.com/boDYvZH.png"/>
        </motion.div>
        <p className="text-center">Contact Me</p>
      </motion.footer>

      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 50,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 30,
                        },
                        repulse: {
                            distance: 200,
                            duration: 100.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffff",
                    },
                    links: {
                        color: "#2f9f",
                        distance: 150,
                        enable: false,
                        opacity: 0.25,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "top",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: {min: 0.5, max: 1},
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 0.25, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  ) 
}
