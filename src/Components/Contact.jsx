import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import emailjs from "emailjs-com";
import React, { useRef } from "react";

export default function Contact({ handleClose }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClose();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    visible: {
      y: window.current,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  const form = useRef();

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        class="modal"
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.form ref={form} onSubmit={sendEmail} class="contact-modal">
          <button class="ml-[600px]" onClick={handleClose}>
            <span class="font-bold text-white shadow-md shadow-slate-800 rounded-sm p-2">
              X
            </span>
          </button>
          <label class="font-bold">Name</label>
          <input
            type="text"
            name="user_name"
            class="rounded-md w-[350px] px-2 m-2"
          />
          <label class="font-bold">Email</label>
          <input
            type="email"
            name="user_email"
            class="rounded-md w-[350px] px-2 m-2"
          />
          <label class="font-bold">Message</label>
          <textarea name="message" class="rounded-md w-[350px] px-2 m-2" />
          <input type="submit" value="Send" />
        </motion.form>
      </motion.div>
    </Backdrop>
  );
}
