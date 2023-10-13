import { useModal } from "@/store/ModalContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal() {
  const { isOpen, modalContent, closeModal } = useModal();
  if (!modalContent) return null;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-gray-950 p-6 text-left align-middle shadow-xl transition-all border border-white/20">
                  <div className="relative">
                    <img
                      src={modalContent.image}
                      alt=""
                      className="rounded-xl mb-12 shadow-md shadow-gray-400/20"
                    />
                    <img
                      src="/images/close.svg"
                      alt="close"
                      className="absolute w-6 -right-2 -top-2 cursor-pointer transition-opacity duration-300 hover:opacity-50"
                      onClick={closeModal}
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-100"
                  >
                    {modalContent.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className=" text-gray-400">{modalContent.description}</p>
                  </div>
                  <div className="mt-6 border-t border-white/10">
                    <ul className="divide-y divide-white/10">
                      <li className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                        <h4 className="  leading-6 text-gray-200">
                          Technologies
                        </h4>
                        <p className="mt-1  leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                          {modalContent.tech}
                        </p>
                      </li>
                      <li className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                        <h4 className=" leading-6 text-gray-200">Work</h4>
                        <p className="mt-1  leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                          {modalContent.work}
                        </p>
                      </li>
                      <li className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 ">
                        <h4 className="  leading-6 text-gray-200">
                          Challenges
                        </h4>
                        <p className="mt-1  leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                          {modalContent.challenges}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-6 text-gray-300  mt-12 ">
                    <a
                      href={modalContent.siteUrl}
                      target="_blank"
                      className="flex gap-2 align-center transition-opacity duration-300 hover:opacity-50 rounded-xl bg-sky-950 py-2 px-4 "
                    >
                      <p>Visit site</p>
                      <img
                        src="/images/arrow-up-right.svg"
                        alt=""
                        className="h-4 self-center"
                      />
                    </a>
                    <a
                      href={modalContent.repo}
                      target="_blank"
                      className="flex gap-2 align-center transition-opacity duration-300 hover:opacity-50 rounded-xl bg-sky-950 py-2 px-4 "
                    >
                      <p>See repo</p>
                      <img
                        src="/images/github-logo.svg"
                        alt=""
                        className="h-4 self-center"
                      />
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
