import { useModal } from "@/store/ModalContext";
import { fadeInVariants } from "@/utils/motionVariants";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal() {
  const { isOpen, modalContent, closeModal } = useModal();

  if (!modalContent) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", duration: 0.1 },
    },
    exit: { opacity: 0, transition: { when: "afterChildren", duration: 0.1 } },
  };

  const contentVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 0.3, type: "spring",
      stiffness: 400,
      damping: 40 },
      
    },
  };

  const modalListVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  const listItemsVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const linksVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.7,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 backdrop-blur-xl z-40 "
            onClick={closeModal}
          >
            <motion.div
              variants={contentVariants}
              className="fixed top-30 inset-0 overflow-y-auto z-50"
            >
              <div className="flex min-h-full items-center justify-center text-center">
                <motion.div
                  className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-gray-950 p-6 text-left align-middle shadow-xl transition-all border border-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <img
                      src={modalContent.image}
                      alt=""
                      className="rounded-xl mb-12 border border-white/20"
                    />
                    <div
                      className=" w-12 h-12 absolute -right-6 -top-6 flex justify-center items-center cursor-pointer hover:opacity-50 transition-opacity duration-300 "
                      onClick={closeModal}
                    >
                      <img
                        src="/images/close.svg"
                        alt="close"
                        className=" w-6 "
                      />
                    </div>
                  </div>
                  <motion.h3
                    variants={fadeInVariants}
                    className="text-lg font-bold leading-6 text-gray-100"
                  >
                    {modalContent.title}
                  </motion.h3>
                  <motion.div
                    variants={fadeInVariants}
                    transition={{ delay: 0.8 }}
                    className="mt-2"
                  >
                    <p className=" text-gray-400">{modalContent.description}</p>
                  </motion.div>
                  <div className="mt-6 border-t border-white/10">
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={modalListVariants}
                      className="divide-y divide-white/10"
                    >
                      <motion.li
                        variants={listItemsVariants}
                        className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 "
                      >
                        <h4 className="  leading-6 text-gray-200">
                          Technologies
                        </h4>
                        <p className="mt-1  leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                          {modalContent.tech}
                        </p>
                      </motion.li>
                      <motion.li
                        variants={listItemsVariants}
                        className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 "
                      >
                        <h4 className=" leading-6 text-gray-200">Work</h4>
                        <p className="mt-1  leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                          {modalContent.work}
                        </p>
                      </motion.li>
                      <motion.li
                        variants={listItemsVariants}
                        className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 "
                      >
                        <h4 className="  leading-6 text-gray-200">
                          Challenges
                        </h4>
                        <p className="mt-1  leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                          {modalContent.challenges}
                        </p>
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    variants={linksVariants}
                    className="flex gap-6 text-gray-300  mt-12 "
                  >
                    <motion.a
                      href={modalContent.siteUrl}
                      target="_blank"
                      className="flex gap-2 align-center rounded-xl bg-sky-950 py-2 px-4 "
                      whileTap={{ scale: 0.8 }}
                      whileHover={{ backgroundColor: "#0369a1", duration: 0.3 }}
                    >
                      <p>Visit site</p>
                      <img
                        src="/images/arrow-up-right.svg"
                        alt=""
                        className="h-4 self-center"
                      />
                    </motion.a>
                    <motion.a
                      href={modalContent.repo}
                      target="_blank"
                      className="flex gap-2 align-center rounded-xl bg-sky-950 py-2 px-4 "
                      whileTap={{ scale: 0.8 }}
                      whileHover={{ backgroundColor: "#0369a1", duration: 0.3 }}
                    >
                      <p>See repo</p>
                      <img
                        src="/images/github-logo.svg"
                        alt=""
                        className="h-4 self-center"
                      />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
