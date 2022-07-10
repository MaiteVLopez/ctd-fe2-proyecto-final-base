 
import { Dispatch, SetStateAction } from 'react';
import Modal from './modal';
import { INoticiasNormalizadas } from './types';

type Props = {
  isActive: boolean| Dispatch<SetStateAction<boolean>>;
  modal:INoticiasNormalizadas;
  handleClose:any;
}

const CustomModal = ({isActive,modal,handleClose}:Props) => {
  return (
    <>
    {isActive?
   (
    <Modal >
    <Modal.Close handleClose={handleClose}/>
    <Modal.Imagen suscribe={modal.esPremium} imagen={modal.imagen}/>
    <Modal.ContenedorTexto >
      <Modal.ContenedorTexto.Titulo suscribe ={modal.esPremium} titulo = {modal.titulo} />
      <Modal.ContenedorTexto.Descripcion suscribe = {modal.esPremium} descripcion = {modal.descripcion}/>
    </Modal.ContenedorTexto>
  </Modal>
  ):null
  }
  </>
  )
};

export default CustomModal;