import Image from "next/image";
import heroImage from "../../public/images/desktop-screenshot.jpg";

const ServicesHeroImage = () => {
  const handleHeroImageLoad = (img) => {
    img.classList.add("animate-image-fade");
  };

  return (
    <div className="relative  pt-16 rounded-xl">
      <div className="[perspective:2000px] px-6 lg:px-8 rounded-xl">
        <div
          className="mx-auto max-w-7xl  relative  bg-gradient-to-b from-gray-900 to-gray-950 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:blur-3xl before:opacity-0 before:animate-image-glow
          [transform:rotateX(25deg)] animate-image-rotate 
          rounded-xl
          "
        >
          <Image
            src={heroImage}
            alt="Next.js application development screenshot"
            className=" relative rounded-xl shadow-2xl ring-4 ring-white/10 pointer-events-none opacity-0 w-full"
            sizes="100vw"
            priority
            onLoadingComplete={(img) => handleHeroImageLoad(img)}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroImage;
