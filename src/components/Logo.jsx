import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.svg
      width="177"
      height="13"
      viewBox="0 0 177 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" [perspective:1000px] "
      initial="hidden"
      animate="visible"
    >
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 0.5,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M3.952 12.256C3.184 12.256 2.50133 12.1013 1.904 11.792C1.30667 11.472 0.837333 11.008 0.496 10.4C0.165333 9.792 0 9.04533 0 8.16V7.744H1.216V8.368C1.216 9.24267 1.46133 9.92533 1.952 10.416C2.45333 10.896 3.12 11.136 3.952 11.136C4.784 11.136 5.45067 10.896 5.952 10.416C6.45333 9.92533 6.704 9.24267 6.704 8.368V1.088H7.92V8.16C7.92 9.04533 7.74933 9.792 7.408 10.4C7.07733 11.008 6.61333 11.472 6.016 11.792C5.41867 12.1013 4.73067 12.256 3.952 12.256ZM1.552 1.408V0.304H7.92V1.408H1.552Z"
        fill="#F3F4F6"
        className="[transform:rotateY(50deg)]"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 0.7,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M14.5711 11.984V0.304H15.7871V11.984H14.5711ZM15.4991 11.984V10.88H21.3391V11.984H15.4991ZM15.4991 6.592V5.504H20.7951V6.592H15.4991ZM15.4991 1.408V0.304H21.1631V1.408H15.4991Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 0.9,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M26.1157 11.984L30.4198 0.304H32.5957L37.0438 11.984H35.7957L31.6518 1.072L32.3078 1.408H30.6278L31.3158 1.072L27.3317 11.984H26.1157ZM28.4198 8.272L28.8197 7.168H34.2438L34.6598 8.272H28.4198Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.1,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M42.5961 11.984V0.304H44.6281L51.0281 10.88H51.5401L51.2201 11.136V0.304H52.3881V11.984H50.3401L43.9401 1.408H43.4281L43.7481 1.152V11.984H42.5961Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.3,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M71.144 12.256C70.0987 12.256 69.2027 12.0747 68.456 11.712C67.72 11.3387 67.1173 10.8533 66.648 10.256C66.1893 9.65867 65.8533 9.01333 65.64 8.32C65.4267 7.616 65.32 6.93333 65.32 6.272V5.968C65.32 5.25333 65.4267 4.544 65.64 3.84C65.864 3.12533 66.2053 2.48 66.664 1.904C67.1333 1.328 67.7307 0.869333 68.456 0.528C69.1813 0.176 70.04 0 71.032 0C72.0347 0 72.8987 0.176 73.624 0.528C74.36 0.88 74.9467 1.376 75.384 2.016C75.8213 2.64533 76.088 3.392 76.184 4.256H74.952C74.8667 3.56267 74.6427 2.98667 74.28 2.528C73.9173 2.05867 73.4533 1.70667 72.888 1.472C72.3333 1.23733 71.7147 1.12 71.032 1.12C70.296 1.12 69.6453 1.25333 69.08 1.52C68.5253 1.776 68.0613 2.13867 67.688 2.608C67.3147 3.06667 67.032 3.6 66.84 4.208C66.648 4.80533 66.552 5.44533 66.552 6.128C66.552 6.77867 66.6427 7.40267 66.824 8C67.016 8.59733 67.304 9.136 67.688 9.616C68.072 10.0853 68.552 10.4587 69.128 10.736C69.704 11.0027 70.376 11.136 71.144 11.136C72.2107 11.136 73.1067 10.8693 73.832 10.336C74.5573 9.792 75.0053 9.01333 75.176 8H76.408C76.2907 8.8 76.0133 9.52533 75.576 10.176C75.1387 10.816 74.5467 11.3227 73.8 11.696C73.064 12.0693 72.1787 12.256 71.144 12.256Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.5,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M90.1031 11.984V0.304H91.3191V11.984H90.1031ZM82.0711 11.984V0.304H83.2871V11.984H82.0711ZM83.0151 6.736V5.648H90.3751V6.736H83.0151Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.7,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M96.8658 11.984L101.17 0.304H103.346L107.794 11.984H106.546L102.402 1.072L103.058 1.408H101.378L102.066 1.072L98.0817 11.984H96.8658ZM99.1698 8.272L99.5697 7.168H104.994L105.41 8.272H99.1698Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 1.9,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M113.346 11.984V0.304H115.378L121.778 10.88H122.29L121.97 11.136V0.304H123.138V11.984H121.09L114.69 1.408H114.178L114.498 1.152V11.984H113.346Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.1,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M129.984 11.984V0.304H131.2V11.984H129.984ZM130.912 11.984V10.88H136.752V11.984H130.912ZM130.912 6.592V5.504H136.208V6.592H130.912ZM130.912 1.408V0.304H136.576V1.408H130.912Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.3,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M141.935 8.048V7.024H147.551V8.048H141.935Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.5,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M155.14 11.984V1.104H156.356V11.984H155.14ZM151.492 1.408V0.304H160.004V1.408H151.492Z"
        fill="#F3F4F6"
      />
      <motion.path
        initial={{ rotateY: "270deg" }}
        animate={{
          rotateY: 0,
          transition: {
            delay: 2.7,
            duration: 1,
            type: "spring",
            stifness: 200,
            damping: 40,
            velocity: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          },
        }}
        d="M170.219 12.256C169.206 12.256 168.326 12.0747 167.579 11.712C166.833 11.3493 166.214 10.8693 165.723 10.272C165.233 9.67467 164.865 9.024 164.619 8.32C164.374 7.616 164.251 6.928 164.251 6.256V5.968C164.251 5.25333 164.374 4.544 164.619 3.84C164.875 3.12533 165.254 2.48 165.755 1.904C166.257 1.328 166.881 0.869333 167.627 0.528C168.374 0.176 169.238 0 170.219 0C171.211 0 172.075 0.176 172.811 0.528C173.558 0.869333 174.182 1.328 174.683 1.904C175.185 2.48 175.558 3.12533 175.803 3.84C176.059 4.544 176.187 5.25333 176.187 5.968V6.272C176.187 6.944 176.065 7.632 175.819 8.336C175.585 9.02933 175.217 9.67467 174.715 10.272C174.225 10.8693 173.606 11.3493 172.859 11.712C172.113 12.0747 171.233 12.256 170.219 12.256ZM170.219 11.136C170.966 11.136 171.633 11.0027 172.219 10.736C172.806 10.4587 173.302 10.0853 173.707 9.616C174.113 9.136 174.422 8.59733 174.635 8C174.849 7.40267 174.955 6.77867 174.955 6.128C174.955 5.44533 174.849 4.80533 174.635 4.208C174.422 3.61067 174.107 3.08267 173.691 2.624C173.286 2.15467 172.79 1.78667 172.203 1.52C171.617 1.25333 170.955 1.12 170.219 1.12C169.494 1.12 168.838 1.25333 168.251 1.52C167.665 1.78667 167.163 2.15467 166.747 2.624C166.342 3.08267 166.027 3.61067 165.803 4.208C165.59 4.80533 165.483 5.44533 165.483 6.128C165.483 6.77867 165.59 7.40267 165.803 8C166.017 8.59733 166.326 9.136 166.731 9.616C167.137 10.0853 167.633 10.4587 168.219 10.736C168.817 11.0027 169.483 11.136 170.219 11.136Z"
        fill="#F3F4F6"
      />
    </motion.svg>
  );
};

export default Logo;
