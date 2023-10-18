import Image from "next/image"
import FadeIn from "./FadeIn"

const OtherInterests = () => {
  return (
    <section className=" pt-24 sm:pt-32 pb-60">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
       
        <div>
          <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
            <FadeIn>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mx-auto font-sora bg-gradient-to-r from-sky-200 to-sky-400 inline-block text-transparent bg-clip-text">
                Other Interests
              </h2>
            </FadeIn>
            <FadeIn delay="0.2">
              <p className="mt-6 text-lg text-gray-400">
                I am passionate about electronic music and produce at
                professional level utilising{" "}
                <a
                  href="https://www.apple.com/logic-pro/"
                  target="_blank"
                  className="text-sky-600 hover:opacity-50 transition-opacity duration-300"
                >
                  Logic Pro
                </a>{" "}
                and{" "}
                <a
                  href="https://www.ableton.com/en/"
                  target="_blank"
                  className="text-sky-600 hover:opacity-50 transition-opacity duration-300"
                >
                  Ableton Live
                </a>{" "}
                software. In my free time, I love going fishing or surfing.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="lg:pr-4">
          <FadeIn className="relative overflow-hidden rounded-3xl  px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 border border-white/10">
            <Image
              className="absolute inset-0 h-full w-full object-cover  "
              src="/images/producing-music.jpg"
              alt="Jean Chane-to producing music"
              width={510}
              height={280}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OtherInterests