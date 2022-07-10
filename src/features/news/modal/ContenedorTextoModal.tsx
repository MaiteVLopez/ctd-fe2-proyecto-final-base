import { ReactNode } from "react";
<<<<<<< HEAD
import { CotenedorTexto } from "../styled";
=======
import Modal from ".";
import { SuscribeImage } from "../../../assets";
import { BotonSuscribir, CotenedorTexto, DescripcionModal, ImagenModal, TituloModal } from "../styled";
>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
import Descripcion from "./Descripcion";
import Titulo from "./Titulo";

type Props = {
    children: ReactNode;
}

const ContenedorTexto = ({ children }: Props) => {
    return (
        <CotenedorTexto>
<<<<<<< HEAD
            {children}
=======
            { children }
>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
        </CotenedorTexto>
    );
}

export default ContenedorTexto;
ContenedorTexto.Titulo = Titulo;
ContenedorTexto.Descripcion = Descripcion;
