import { useModal } from "@/store/ModalContext";

const ProjectCard = ({...props}) => {
  const { openModal, setModalContent } = useModal();

const handleOpenModal = () => {
  setModalContent({...props}),
  openModal();
}

  return (
    <div className=" border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl shadow backdrop-blur-xl ">
      <div className="p-6">
        <div onClick={handleOpenModal} className="relative cursor-pointer">
          <img
            className="rounded-xl object-cover w-full border border-white/10 shadow-gray-400/10 transition-all duration-300 shadow hover:shadow-xl hover:shadow-gray-400/10  "
            src={props.image}
            alt={props.title}
          />
        </div>
      </div>
      <div className="px-6 pb-6">
        <h3
          onClick={handleOpenModal}
          className="mb-2 text-xl font-bold tracking-tight font-sora text-gray-200 cursor-pointer "
        >
          {props.title}
        </h3>

        <p className="mb-3  text-gray-400">
        {props.description}
        </p>
        <div className="flex gap-6 text-gray-300">
          <a
            href={props.siteUrl}
            target="_blank"
            className="flex gap-2 align-center transition-opacity duration-300 hover:opacity-50"
          >
            <p>Visit site</p>
            <img
              src="/images/arrow-up-right.svg"
              alt=""
              className="h-4 self-center"
            />
          </a>
          <a
            href={props.repo}
            target="_blank"
            className="flex gap-2 align-center transition-opacity duration-300 hover:opacity-50"
          >
            <p>See repo</p>
            <img
              src="/images/github-logo.svg"
              alt=""
              className="h-4 self-center"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
