import { Divider } from "@/components/Divider";
import Form from "@/components/Form";
import {
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  {
    name: "SEO-Optimised React Applications with Next.js",
    description:
      "Develop SEO-friendly, performant, and responsive React web applications using Next.js, ensuring your website is not only smoothly operational but also optimised for search engines, enhancing your online visibility and user engagement.",
    icons: [
      "/images/next-color.svg",
      "/images/react-color.svg",
      "/images/next-auth.png",
    ],
  },
  {
    name: "Dynamic React Web Applications.",
    description:
      "Crafting highly interactive, responsive, and user-friendly React web applications, tailored to deliver an optimal user experience and meet your specific business requirements",
    icons: [
      "/images/react-color.svg",
      "/images/vite-color.svg",
      "/images/cra-color.svg",
      "/images/react-router-color.svg",
    ],
  },
  {
    name: "Full Stack Development with React & Firebase",
    description:
      "Offering full-stack solutions by combining the intuitive and powerful front-end development through React with the scalable backend capabilities of Firebase, crafting applications that are both powerful and efficient.",
    icons: [
      "/images/react-color.svg",
      "/images/firebase-color.svg",
      "/images/firestore-color.svg",
      "/images/cloud-storage-color.svg",
    ],
  },
  {
    name: "Enthralling React Animations.",
    description:
      " Implementing captivating animations within React applications to ensure your digital platform is not just functional but also visually striking, providing an engaging user experience.",
    icons: ["/images/react-color.svg", "/images/framer-motion.svg"],
  },
  {
    name: "Flexible E-commerce Solutions with Stripe or WordPress/WooCommerce.",
    description:
      "Feature-rich platforms with Stripe for robust payment experiences, or opting for quick, cost-effective store setups with WordPress and WooCommerce, each tailored to suit varied business needs and budget scopes.",
    icons: [
      "/images/stripe-color.png",
      "/images/paypal-color.png",
      "/images/woo-color.svg",
    ],
  },
  {
    name: "WordPress Development & Customisation.",
    description:
      "Customise and develop responsive WordPress sites tailored to your needs, whether it’s a blog, portfolio, or a business site, ensuring both aesthetic appeal and functional efficiency.",
    icons: [
      "/images/wordpress.png",
      "/images/elementor-color.svg",
      "/images/php-color.svg",
    ],
  },
];

export default function Services() {
  return (
    <main className=" py-24 sm:py-32">
      {/* Hero section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h1 className="mt-2 text-3xl font-bold font-sora tracking-tight text-gray-100 sm:text-4xl">
            Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From SEO-optimised React applications to vibrant user interfaces, I
            provide diverse solutions to transform your digital concepts into
            responsive and engaging realities.
          </p>
        </div>
      </section>
      {/* Hero image */}
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/images/desktop-screenshot.jpg"
            alt="Desktop screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-950 pt-[7%]" />
          </div>
        </div>
      </div>
      {/* Services section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:mt-48 lg:px-8 pb-24 lg:pb-48">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 font-sora sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
          {services.map((service, i) => (
            <li
              key={i}
              className="relative pl-9 border border-white/20 rounded-xl p-6 hover:ring-1 ring-white/20 hover:border-white/40 transition-all duration-300 "
            >
              <div className="h-8 flex gap-4">
                {service.icons.map((icon, i) => (
                  <img src={icon} alt="" className="h-full" key={i} />
                ))}
              </div>
              <h2 className="mt-4 font-semibold text-gray-200">
                {service.name}
              </h2>{" "}
              <p className="mt-2 text-gray-400">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <Divider /> */}
      {/* Contact Section */}
      {/* <div className="relative isolate ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-200">
                Let's talk about your project
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Every great project begins with a conversation. Share your
                vision, and let’s bring it to life together.
              </p>
              <div className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <div className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      className="hover:text-white"
                      href="mailto:jeanchaneto@gmail.com"
                    >
                      jeanchaneto@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div> */}



<section className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:pb-48 lg:px-8">
        <div className="relative isolate overflow-hidden  px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 border border-white/20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight  sm:text-4xl text-gray-200">
          Let's talk about your project
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Every great project begins with a conversation. Share your vision, and let’s bring it to life together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>






    </main>
  );
}
