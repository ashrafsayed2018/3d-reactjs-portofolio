import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { SectionWraper } from "../hoc";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // template_oyz4n4y
    // service_vf8jwm7
    // JexOJKc6EUGNv7B9J
    emailjs
      .send(
        "service_vf8jwm7",
        "template_oyz4n4y",
        {
          from_name: form.name,
          to_name: "khadamatk",
          from_email: form.email,
          to_email: "khadamatkkw@gmail.com",
          message: form.message,
        },
        "JexOJKc6EUGNv7B9J"
      )
      .then(
        () => {
          setLoading(false);
          alert("message is sent successfuly");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("something wrong");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form ref={formRef} className="mt-12 flex flex-col gap-8">
          <lable className="flex flex-col">
            <span className="mb-4 text-white font-medium">your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary text-white border-none font-medium"
            />
          </lable>
          <lable className="flex flex-col">
            <span className="mb-4 text-white font-medium">your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary text-white border-none font-medium"
            />
          </lable>
          <lable className="flex flex-col">
            <span className="mb-4 text-white font-medium">your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what's your message"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary text-white border-none font-medium"
            />
          </lable>
          <button
            className="outline-none bg-tertiary px-8 py-3 w-fit text-white shadow-md shadow-primary font-bold rounded-xl"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWraper(Contact, "contact");
