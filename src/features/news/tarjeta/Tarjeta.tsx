import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, TarjetaNoticia, TituloTarjetaNoticia } from "../styled";
import { INoticiasNormalizadas } from "../types";
import ImagenTarjeta from "./ImagenTarjeta";

type Props = {
    noticia: INoticiasNormalizadas;
    handleModal: any;
    setData: any;
}

const Tarjeta = ({ noticia, handleModal, setData }: Props) => {
    const handle = () => {
        handleModal();
        setData(noticia);
    }
    return (
        <>
            <TarjetaNoticia>
                <Tarjeta.Imagen imagen={noticia.imagen} />
                <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
                <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
                <DescripcionTarjetaNoticia>
                    {noticia.descripcionCorta}
                </DescripcionTarjetaNoticia>
                <BotonLectura onClick={handle}>Ver más</BotonLectura>
            </TarjetaNoticia>
        </>
    )
}
export default Tarjeta;
Tarjeta.Imagen = ImagenTarjeta;