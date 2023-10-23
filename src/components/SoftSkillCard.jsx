import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cardsVariants } from "@/utils/motionVariants";

const SoftSkillCard = ({ icon, title }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.li
      className="group relative rounded-xl border border-white/10  px-6 py-12 shadow-2xl"
      onMouseMove={handleMouseMove}
      variants={cardsVariants}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              325px circle at ${mouseX}px ${mouseY}px,
              rgba(94, 234, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <div className=" flex flex-col items-center gap-4 justify-center pointer-events-none">
          <img src={icon} alt={`${title}`} className="h-8" />
          <h3 className="text-xl font-bold tracking-tight text-gray-300">
            {title}
          </h3>
        </div>
      </div>
    </motion.li>
  );
};

export default SoftSkillCard;
