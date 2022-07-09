
import { ReactNode } from "react";
import {
    TarjetaModal,
    ContenedorModal,

} from "../styled";

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

