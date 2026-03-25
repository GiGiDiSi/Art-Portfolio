const ImgModal = ({ isOpen, ImgSrc }) => {
  if (!isOpen) return null; // Do not render if closed

  return (
    <div id="imgModal" className="modal" onClick={() => closeModal()}>
      <span className="close" onClick={() => closeModal()}>
        &times;
      </span>
      <img src={ImgSrc} className="modal-content" id="img01" />
    </div>
  );
};

export default ImgModal;
