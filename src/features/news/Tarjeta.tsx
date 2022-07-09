import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from "./styled";
import { INoticiasNormalizadas } from "./types";

type Props = {
    noticia : INoticiasNormalizadas;
}

const Tarjeta = ( {noticia} : Props) => {
    return (
        <>
            <TarjetaNoticia>
                <ImagenTarjetaNoticia src={noticia.imagen} />
                <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
                <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
                <DescripcionTarjetaNoticia>
                    {noticia.descripcionCorta}
                </DescripcionTarjetaNoticia>
                <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
            </TarjetaNoticia>
        </>
    )
}
export default Tarjeta;


function setModal(noticia: INoticiasNormalizadas): void {
    throw new Error("Function not implemented.");
}
/**
 * 
 *                { //<BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
               }
 */