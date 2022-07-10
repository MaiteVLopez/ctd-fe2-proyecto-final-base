import { SuscribeImage } from "../../../assets";
import { ImagenModal } from "../styled";

type Props = {
  suscribe: boolean;
<<<<<<< HEAD
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
=======
  imagen:string;
}

const ImageModal = ({suscribe, imagen}:Props) => {
  return (
    <>
    {
      suscribe ? 
      (<ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />):

      (<ImagenModal src={imagen} alt="news-image" />)
    }
>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
    </>
  );

}

export default ImageModal
