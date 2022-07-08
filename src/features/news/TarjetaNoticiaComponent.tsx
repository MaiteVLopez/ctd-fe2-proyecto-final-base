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
    noticias:INoticiasNormalizadas;
}

const TarjetaNoticiaComponent = ({noticias}:Props) => {
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
    const ahora = new Date();
    return(
        <>
        {
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticias.imagen} />
            <TituloTarjetaNoticia>{noticias.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticias.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {noticias.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(noticias)}>Ver más</BotonLectura>
        </TarjetaNoticia>
        }
        {
            /*
            modal ? (
                <>
                    <ContenedorModalComponent suscribe={modal.esPremium} modal = {modal}/>
                    <CloseButton onClick={() => setModal(null)}>
                        <img src={Close} alt="close-button" />
                    </CloseButton>
                </>
            ) : null
            */
            modal ? (
                <>
                <ContenedorModalComponent noticiaModal={modal} modal = {true}/>
                <>{ahora.getTime()}</>
                </>
              ) : null
        }
        </>
    )
}

export default TarjetaNoticiaComponent

