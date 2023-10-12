import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <form
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg border border-white/20 p-6 rounded-xl bg-gradient-to-tl from-cyan-700/10 to-transparent relative overflow-hidden">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm leading-6 text-gray-300"
            >
              Full Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-gray-900/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-cyan-500 sm:text-sm sm:leading-6 focus:outline-none transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm leading-6 text-gray-300"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-gray-900/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-cyan-500 sm:text-sm sm:leading-6 focus:outline-none transition-all duration-300"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm leading-6 text-gray-300"
            >
              How can I help?
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 bg-gray-900/40 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-cyan-500 sm:text-sm sm:leading-6 focus:outline-none transition-all duration-300"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>
        {/* Confirmation message */}
        {submitted && (
          <div className="absolute inset-0  backdrop-blur-xl rounded-xl">
            <div className=" w-full h-full rounded-xl flex-col flex justify-center items-center p-6">
              <p className="">Thank you for your message.</p>
              <p className="">I'll get back to you as soon as possible!</p>
              <div
                onClick={handleClose}
                className="text-gray-100 font-semibold cursor-pointer w-12 h-12 flex items-center justify-center "
              >
                x
              </div>
            </div>
          </div>
        )}
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
          <button
            type="submit"
            className="rounded-xl min-w-fit border border-white/40 px-3.5 py-2.5 text-center text-sm text-gray-100 shadow-sm transition-color duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
