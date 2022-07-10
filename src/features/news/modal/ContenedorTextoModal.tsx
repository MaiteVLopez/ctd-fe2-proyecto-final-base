import { ReactNode } from "react";
import { CotenedorTexto } from "../styled";
import Descripcion from "./Descripcion";
import Titulo from "./Titulo";

type Props = {
    children: ReactNode;
}

const ContenedorTexto = ({ children }: Props) => {
    return (
        <CotenedorTexto>
            {children}
        </CotenedorTexto>
    );
}

export default ContenedorTexto;
ContenedorTexto.Titulo = Titulo;
ContenedorTexto.Descripcion = Descripcion;
