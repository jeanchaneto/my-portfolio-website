import { useModal } from "@/store/ModalContext";
import { cardsVariants } from "@/utils/motionVariants";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const borderVariants = {
  initial: { opacity: 0.2 },
  hover: {
    opacity: 0.7,
  },
};

const ProjectCard = ({ ...props }) => {
  const { openModal, setModalContent } = useModal();
  const handleOpenModal = () => {
    setModalContent({ ...props }), openModal();
  };
  const controls = useAnimation();
  const handleMouseEnter = () => {
    controls.start("hover");
  };

  const handleMouseLeave = () => {
    controls.start("initial");
  };

  return (
    <motion.div
    variants={cardsVariants}
      whileHover={{
        scale: 1.05,
        y: -24,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 20,
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="  rounded-xl shadow backdrop-blur-xl box-border"
    >
      <motion.div
        variants={borderVariants}
        animate={controls}
        className=" absolute inset-0 border pointer-events-none opacity-20 rounded-xl box-border"
      ></motion.div>
      <div className="p-6">
        <motion.div
          variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.05, y: -16 },
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 20,
            },
          }}
          onClick={handleOpenModal}
          className="relative cursor-pointer"
        >
          <Image
            className="rounded-xl object-cover w-full border border-white/10 opacity-0   "
            src={props.image}
            alt={props.title}
            width={410}
            height={270}
            onLoadingComplete={(img) => img.classList.add("animate-image-load")} 
          />
        </motion.div>
      </div>
      <div className="px-6 pb-6">
        <motion.h3
          onClick={handleOpenModal}
          className="mb-3 text-xl font-bold tracking-tight font-sora text-gray-200 cursor-pointer "
          whileTap={{ scale: 0.8 }}
          whileHover={{ color: "rgb(14, 165, 233)", duration: 0.3 }}
        >
          {props.title}
        </motion.h3>

        <p className="mb-6 text-gray-400 pointer-events-none">{props.description}</p>
        <div className="flex gap-6 text-gray-300">
          <motion.a
            href={props.siteUrl}
            target="_blank"
            className="flex gap-2 items-center rounded-xl px-4 py-3 bg-sky-950"
            whileTap={{ scale: 0.8 }}
            whileHover={{ backgroundColor: "#0c4a6e" }}
          >
            <p>Visit site</p>
            <img
              src="/images/arrow-up-right.svg"
              alt=""
              className="h-4 self-center"
            />
          </motion.a>
          <motion.a
            href={props.repo}
            target="_blank"
            className="flex gap-2  items-center rounded-xl px-3 py-2 border-2 border-white/10  "
            whileTap={{ scale: 0.8 }}
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              duration: 0.3,
            }}
          >
            <p>See repo</p>
            <img
              src="/images/github-logo.svg"
              alt=""
              className="h-4 self-center"
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
