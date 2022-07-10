
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
<<<<<<< HEAD
    children: ReactNode;
}


const Modal = ({ children }: Props) => {
    return (
=======
    children:ReactNode;
}


const Modal = ({children}:Props) => {
   return (
>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
        <ContenedorModal >
            <TarjetaModal>
                {children}
            </TarjetaModal>
        </ContenedorModal>
<<<<<<< HEAD
    )
=======
   )
>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
}

export default Modal;

Modal.Close = CloseModal;
Modal.Imagen = ImageModal;
Modal.ContenedorTexto = ContenedorTextoModal;
Modal.ContenedorTexto.Titulo = Titulo;
Modal.ContenedorTexto.Descripcion = Descripcion;