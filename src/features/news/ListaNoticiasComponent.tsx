import { useEffect, useState } from "react";
import ContenedorModalComponent from "./ContenedorModalComponent";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { obtenerNoticias } from "./fakeRest";
import {
    CloseButton,
    BotonLectura,
    ListaNoticias,
} from "./styled";
import TarjetaNoticiaComponent from "./TarjetaNoticiaComponent";

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
}
const ListaNoticiasComponent = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

    useEffect(() => {
        const obtenerInformacion = async () => {
            const respuesta = await obtenerNoticias();

            const data = respuesta.map((n) => {
                const titulo = n.titulo
                    .split(" ")
                    .map((str) => {
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    })
                    .join(" ");

                const ahora = new Date();
                const minutosTranscurridos = Math.floor(
                    (ahora.getTime() - n.fecha.getTime()) / 60000
                );

                return {
                    id: n.id,
                    titulo,
                    descripcion: n.descripcion,
                    fecha: `Hace ${minutosTranscurridos} minutos`,
                    esPremium: n.esPremium,
                    imagen: n.imagen,
                    descripcionCorta: n.descripcion.substring(0, 100),
                };
            });

            setNoticias(data);
        };

        obtenerInformacion();
    }, []);
    /*el setModal deveria ser pasado en contex provider */
    return (
        <ListaNoticias>
            {
                noticias.map((n) => (
                    <>
                        <TarjetaNoticiaComponent noticias={n} />
                        <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
                    </>
                ))
            }
            {
                modal ? (
                    <>
                        <ContenedorModalComponent suscribe={modal.esPremium} modal = {modal}/>
                        <CloseButton onClick={() => setModal(null)}>
                            <img src={Close} alt="close-button" />
                        </CloseButton>
                    </>
                ) : null
            }
        </ListaNoticias>
    )
}

export default ListaNoticiasComponent;