import FadeIn from "./FadeIn";

const Languages = () => {
  return (
    <section className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl sm:text-center">
          <FadeIn>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-l from-red-300 via-gray-300 to-blue-400 inline-block text-transparent bg-clip-text">
              Languages
            </h2>
          </FadeIn>
          <FadeIn delay="0.2">
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Fluent in English and native in French, I confidently communicate
              at high professional and casual levels in each language.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay="0.4" className="mt-6 flex gap-16 justify-center">
          <img
            src="/images/english-flag.svg"
            alt="UK flag"
            className="rounded-xl w-24"
          />

          <img
            src="/images/french-flag.svg"
            alt="French flag"
            className=" rounded-xl w-24"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default Languages;
