import { TituloModal } from "../styled";

type Props = {
    suscribe: boolean;
    titulo: string;
}

const Titulo = ({ suscribe, titulo }: Props) => {
    return (
        <>
            {
                suscribe ?
                    (
                        <TituloModal >Suscríbete a nuestro Newsletter</TituloModal>
                    ) :
                    (
                        <TituloModal >{titulo}</TituloModal>
                    )
            }
        </>
    );

}

export default Titulo
