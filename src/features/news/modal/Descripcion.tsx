import { DescripcionModal } from "../styled";

type Props = {
    suscribe: boolean;
    descripcion: string;
}

const Descripcion = ({ suscribe, descripcion }: Props) => {
    return (
        <>
            {
                suscribe ?
                    (
                        <DescripcionModal>
                            Suscríbete a nuestro newsletter y recibe noticias de
                            nuestros personajes favoritos.
                        </DescripcionModal>
                    ) :
                    (
                        <DescripcionModal>{descripcion}</DescripcionModal>
                    )
            }
        </>
    );

}

export default Descripcion;