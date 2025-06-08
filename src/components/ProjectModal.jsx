function ProjectModal({ isOpen, onClose, title, image, description, repo, live, extraText }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-yellow-400 rounded-lg p-6 w-200 relative mt-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-black hover:text-red-600 text-4xl font-bold cursor-pointer"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <img src={image} alt={title} className="rounded mb-4 w-full h-auto" />
        <p className="text-black text-xl mb-4 flex text-center">{description}</p>
        {extraText && <p className="text-black text-xl mb-4 text-center">{extraText}</p>}
        <div className="flex justify-center gap-6">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            Repo
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white underline"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
