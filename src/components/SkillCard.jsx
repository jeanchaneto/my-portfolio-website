import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const SkillCard = ({title, logo}) => {

    let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className="group relative rounded-xl border border-white/10  px-6 py-12 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              325px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <div className=" flex items-center gap-4 justify-center">
            <img src={logo} alt={`${title} logo`} className="h-8"/>
          <h3 className="text-xl font-bold tracking-tight text-gray-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SkillCard