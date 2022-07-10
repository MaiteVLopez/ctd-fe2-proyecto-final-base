
import { useState } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    CotenedorTexto,
    BotonSuscribir

} from "./styled";

type Props = {
    noticiaModal:INoticiasNormalizadas | null;
}
export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}

const ContenedorModalComponent = ({noticiaModal}:Props) => {
    
   const [suscribe, setModal] = useState<INoticiasNormalizadas | null>(noticiaModal);
   
   return (
    suscribe ? (
        suscribe.esPremium ? (
            <>
            <ContenedorModal>
            <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                <CotenedorTexto>
                    <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                    <DescripcionModal>
                        Suscríbete a nuestro newsletter y recibe noticias de
                        nuestros personajes favoritos.
                    </DescripcionModal>
                    <BotonSuscribir
                        onClick={() =>
                            setTimeout(() => {
                                alert("Suscripto!");
                                setModal(null);
                            }, 1000)
                        }
                    >
                        Suscríbete
                    </BotonSuscribir>
                </CotenedorTexto>
            </TarjetaModal>
            </ContenedorModal>
            </>
        )
        :
        (
            <ContenedorModal>
            <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={suscribe.imagen} alt="news-image" />
                <CotenedorTexto>
                    <TituloModal>{suscribe.titulo}</TituloModal>
                    <DescripcionModal>{suscribe.descripcion}</DescripcionModal>
                </CotenedorTexto>
            </TarjetaModal>
            </ContenedorModal>
        )
        ): <>
        <CloseButton onClick={() => setModal(null)}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
        </>
    )
}

export default ContenedorModalComponent

/*
modal.esPremium ? (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
          <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
          <DescripcionModal>
            Suscríbete a nuestro newsletter y recibe noticias de
            nuestros personajes favoritos.
          </DescripcionModal>
          <BotonSuscribir
            onClick={() =>
              setTimeout(() => {
                alert("Suscripto!");
                setModal(null);
              }, 1000)
            }
          >
            Suscríbete
          </BotonSuscribir>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  ) : (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={modal.imagen} alt="news-image" />
        <CotenedorTexto>
          <TituloModal>{modal.titulo}</TituloModal>
          <DescripcionModal>{modal.descripcion}</DescripcionModal>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  )
  */