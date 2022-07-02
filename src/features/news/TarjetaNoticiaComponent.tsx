import { useState } from "react";
import {
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    BotonLectura,
} from "./styled";

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
    return(
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticias.imagen} />
            <TituloTarjetaNoticia>{noticias.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticias.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {noticias.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(noticias)}>Ver más</BotonLectura>
        </TarjetaNoticia>
    )
}

export default TarjetaNoticiaComponent