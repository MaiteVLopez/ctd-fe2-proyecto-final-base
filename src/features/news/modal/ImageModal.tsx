import { SuscribeImage } from "../../../assets";
import { ImagenModal } from "../styled";

type Props = {
  suscribe: boolean;
  imagen: string;
}

const ImageModal = ({ suscribe, imagen }: Props) => {
  return (
    <>
      {
        suscribe ?
          (<ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />) :

          (<ImagenModal src={imagen} alt="news-image" />)
      }
    </>
  );

}

export default ImageModal
