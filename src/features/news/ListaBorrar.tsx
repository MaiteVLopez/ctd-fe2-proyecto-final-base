import ContenedorModalComponent from "./ContenedorModalComponent";
import {
    BotonLectura,
    DescripcionTarjetaNoticia,
    FechaTarjetaNoticia,
    ImagenTarjetaNoticia,
    ListaNoticias, TarjetaNoticia, TituloTarjetaNoticia,
} from "./styled";
import { INoticiasNormalizadas } from "./types";

type Props = {
    noticias: INoticiasNormalizadas[];
}

const Lista = ({noticias}:Props) => {
    /*
    return (
        <ListaNoticias>
            {
                noticias.map((noticia) => (
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
                ))
            }
            <>
            <ContenedorModalComponent noticiaModal={modal}  />
            </>            
        </ListaNoticias>
    )
    */
}
export default Lista;