const services = [
  {
    name: "SEO-Optimised React Applications with Next.js",
    description:
      "Develop SEO-friendly, performant, and responsive React web applications using Next.js, ensuring your website is not only smoothly operational but also optimised for search engines, enhancing your online visibility and user engagement.",
    icons: ["/images/nextjs.svg", "/images/react-color.svg", "/images/next-auth.png"],
  },
  {
    name: "Dynamic React Web Applications.",
    description:
      "Crafting highly interactive, responsive, and user-friendly React web applications, tailored to deliver an optimal user experience and meet your specific business requirements",
    icons: ["/images/react-color.svg", "/images/vite-color.svg", "/images/cra-color.svg", "/images/react-router-color.svg" ],
  },
  {
    name: "Full Stack Development with React & Firebase",
    description:
      "Offering full-stack solutions by combining the intuitive and powerful front-end development through React with the scalable backend capabilities of Firebase, crafting applications that are both powerful and efficient.",
    icons: ["/images/react-color.svg", "/images/firebase-color.svg", "/images/firestore-color.svg","/images/cloud-storage-color.svg"],
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
    icons: ["/images/stripe-color.png", "/images/paypal-color.png", "/images/woo-color.svg"],
  },
  {
    name: "WordPress Development & Customisation.",
    description:
      "Customise and develop responsive WordPress sites tailored to your needs, whether it’s a blog, portfolio, or a business site, ensuring both aesthetic appeal and functional efficiency.",
    icons: ["/images/wordpress.svg", "/images/elementor-color.svg", "/images/php-color.svg"],
  },
];

export default function Services() {
  return (
    <main className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From SEO-optimised React applications to vibrant user interfaces, I
            provide diverse solutions to transform your digital concepts into
            responsive and engaging realities.
          </p>
        </div>
      </div>
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
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
          {services.map((service, i) => (
            <li
              key={i}
              className="relative pl-9 border border-white/20 rounded-xl p-6"
            >
              <div className="h-8 flex gap-4">
                {service.icons.map((icon, i) => (
                  <img src={icon} alt="" className="h-full" key= {i} />
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
    </main>
  );
}
