import { ImagenTarjetaNoticia } from "../styled";

type Props = {
    imagen: string;
}

const ImagenTarjeta = ({ imagen }: Props) => {
    return (
        <ImagenTarjetaNoticia src={imagen} />
    )
}
export default ImagenTarjeta;