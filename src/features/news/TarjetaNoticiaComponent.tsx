import { useState } from "react";
import ContenedorModalComponent from "./ContenedorModalComponent";
import {
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    BotonLectura,
    CloseButton,
    ContenedorModal,
    TarjetaModal,
    CotenedorTexto,
    DescripcionModal,
    TituloModal,
    ImagenModal,
    BotonSuscribir,
} from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import useToggle from "./useToggle";

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}

type Props = {
    noticia:INoticiasNormalizadas;
}

const TarjetaNoticiaComponent = ({noticia}:Props) => {
   // const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
   // const [modal, setModal] = useToggle
    return(
        <>
        {
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => true}>Ver más</BotonLectura>
        </TarjetaNoticia>
        }
        </>
    )
}

export default TarjetaNoticiaComponent

