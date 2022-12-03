import { useEffect, forwardRef,} from 'react';
import { Overlay, ModalWrapper } from "./Modal.styled"
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'
const modalRoot = document.querySelector('#modal-root');

export const Modal = forwardRef(({ onClose, status, isModalOpen, trailer }, ref) => {

  useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
    onClose();
    }};
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)} ;
  },[onClose])

 const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
   }
  };
  
  return createPortal(
      <>
      {isModalOpen && status==="resolved"&&(
        <Overlay ref={ref} onClick={handleBackdropClick}>
            <ModalWrapper >         
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer[0].key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
          </ModalWrapper>
        </Overlay>)}
    </>, modalRoot )
})


Modal.propTypes = {
  onClose: PropTypes.func ,
  status:PropTypes.string,
  isModalOpen:PropTypes.bool,
  trailer: PropTypes.array,
  
} 

