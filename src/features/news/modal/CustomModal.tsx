
import Modal from '.';

type Props = {
  modal: any//INoticiasNormalizadas | null;,
  handleClose: any;
}

const CustomModal = ({ modal, handleClose }: Props) => {
  return (
    <>
      {modal ?
        (
          <Modal >
            <Modal.Close handleClose={handleClose} />
            <Modal.Imagen suscribe={modal.esPremium} imagen={modal.imagen} />
            <Modal.ContenedorTexto >
              <Modal.ContenedorTexto.Titulo suscribe={modal.esPremium} titulo={modal.titulo} />
              <Modal.ContenedorTexto.Descripcion suscribe={modal.esPremium} descripcion={modal.descripcion} />
            </Modal.ContenedorTexto>
          </Modal>
        ) : null
      }
    </>
  )
};

export default CustomModal;