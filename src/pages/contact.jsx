import AnimatedText from "@/components/AnimatedText";
import Form from "@/components/Form"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { motion} from "framer-motion";
import Head from "next/head";

const contact = () => {
  return (
    <main className="relative isolate min-h-screen bg-page-gradient ">
      <Head>
        <title>Jean Chane-to | Contact:  Get Your Project Started</title>
        <meta
          name="description"
          content="Available for hire and eager to bring technical and creative skills to your team or project. Let's discuss how we can build something great together."
        />
        <meta
          property="og:title"
          content="Jean Chane-to | Contact:  Get Your Project Started"
        />
        <meta
          property="og:description"
          content="Available for hire and eager to bring technical and creative skills to your team or project. Let's discuss how we can build something great together."
        />
      </Head>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 sm:pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <AnimatedText el="h1" className="text-3xl font-bold tracking-tight text-gray-100 pointer-events-none">
              Contact
              </AnimatedText>
              <motion.p 
              variants={{ hidden: {opacity:0, y:24}, visible: {opacity:1, y:0, transition: { delay: 0.3, duration: 0.5}}}}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg leading-8 text-gray-300 pointer-events-none">
              Ready to bring your ideas into the digital realm? Reach out for inquiries, quotes, or to discuss potential collaborations. Let's create something remarkable together.
              </motion.p>
              <div className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <motion.div 
                variants={{ hidden: {opacity:0, y:24}, visible: {opacity:1, y:0, transition: { delay: 0.5, duration: 0.5}}}}
                initial="hidden"
                animate="visible"
                whileHover={{color: "#0ea5e9", transition: {duration: 0.3}}}
                className="flex gap-x-4">
                  <div className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <motion.a
                      className=""
                      href="mailto:jeanchaneto@gmail.com"
                      
                    >
                      jeanchaneto@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </main>
  )
}

export default contact