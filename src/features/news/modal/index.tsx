
import { ReactNode } from "react";
import {
    TarjetaModal,
    ContenedorModal,

} from "../styled";
import CloseModal from "./CloseModal";
import ContenedorTextoModal from "./ContenedorTextoModal";
import Descripcion from "./Descripcion";
import ImageModal from "./ImageModal";
import Titulo from "./Titulo";

type Props = {
    children:ReactNode;
}


const Modal = ({children}:Props) => {
    
   
   return (
        <ContenedorModal>
            <TarjetaModal>
                {children}
            </TarjetaModal>
        </ContenedorModal>
        )  
}

export default Modal;

Modal.Close = CloseModal;
Modal.Imagen = ImageModal;
Modal.ContenedorTexto = ContenedorTextoModal;
Modal.ContenedorTexto.Titulo = Titulo;
Modal.ContenedorTexto.Descripcion = Descripcion;