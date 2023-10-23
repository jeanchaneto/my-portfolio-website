import Image from "next/image";

const ServicesHeroImage = () => {
  return (
    <div className="relative  pt-16 rounded-xl">
      <div className="[perspective:2000px] px-6 lg:px-8 rounded-xl">
        <div      
          animate="visible"
          className="mx-auto max-w-7xl  relative  bg-gradient-to-b from-gray-900 to-gray-950 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:blur-3xl 
          [transform:rotateX(25deg)] animate-image-rotate before:animate-image-glow
          rounded-xl
          "
        >
          <Image
            src="/images/desktop-screenshot.jpg"
            alt="Next.js application development screenshot"
            className=" relative rounded-xl shadow-2xl ring-4 ring-white/10 pointer-events-none 
            animate-image-fade
             "
            width={2432}
            height={1442}
            priority={true}
            pl
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroImage;
