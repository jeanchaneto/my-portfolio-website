import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const labelVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const inputVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Form = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  const handleClose = () => {
    setSubmitted(false);
  };

  return (
    <motion.form
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 "
      ref={form}
      onSubmit={sendEmail}
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg border border-white/20 p-6 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(14,125,233,0.15),transparent)] relative overflow-hidden">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="overflow-hidden">
              <motion.label
                variants={labelVariants}
                htmlFor="first-name"
                className="block text-sm leading-6 text-gray-300"
              >
                Full Name
              </motion.label>
            </div>
            <div className="mt-2.5">
              <motion.input
                variants={inputVariants}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full appearance-none rounded-md border-0 bg-gray-900/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-sky-500 sm:text-sm sm:leading-6 focus:outline-none origin-left "
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className=" overflow-hidden ">
              <motion.label
                variants={labelVariants}
                htmlFor="email"
                className="block text-sm leading-6 text-gray-300"
              >
                Email
              </motion.label>
            </div>
            <div className="mt-2.5">
              <motion.input
                variants={inputVariants}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-gray-900/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-sky-500 sm:text-sm sm:leading-6 focus:outline-none origin-left "
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="overflow-hidden">
              <motion.label
                variants={labelVariants}
                htmlFor="message"
                className="block text-sm leading-6 text-gray-300"
              >
                How can I help?
              </motion.label>
            </div>
            <div className="mt-2.5">
              <motion.textarea
                variants={inputVariants}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 bg-gray-900/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-sky-500 sm:text-sm sm:leading-6 focus:outline-none origin-left"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>
        {/* Confirmation message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              key="confirmation-message"
              variants={{
                hidden: {
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeIn" },
                },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0  backdrop-blur-xl rounded-xl"
            >
              <div className=" relative w-full h-full rounded-xl flex-col flex justify-center items-center p-6">
                <p className="">Thank you for your message.</p>
                <p className="">I'll get back to you as soon as possible!</p>
                <div
                  onClick={handleClose}
                  className="text-gray-100 font-semibold cursor-pointer w-12 h-12 flex items-center justify-center absolute right-0 top-0 text-xl "
                >
                  x
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-8 flex justify-end">
          {error && (
            <p className=" text-red-400 text-sm mx-auto  self-center pr-6 ">
              Oops something went wrong, try again or email directly at{" "}
              <a
                href="mailto:jeanchaneto@gmail.com"
                className=" underline font-semibold"
              >
                jeanchaneto@gmail.com
              </a>
            </p>
          )}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.8 }}
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              duration: 0.3,
            }}
            className="rounded-xl min-w-fit border border-white/40 px-3.5 py-2.5 text-center text-sm text-gray-100 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            variants={buttonVariants}
          >
            {loading ? "Sending..." : "Send message"}
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
};

export default Form;
