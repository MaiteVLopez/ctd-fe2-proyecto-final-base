import { useEffect, useState } from "react";
import CustomModal from "./modal/CustomModal";
import { obtenerNoticias } from "./fakeRest";
import useModal from "./HookModal/useModal";
import { ListaNoticias } from "./styled";
import Tarjeta from "./tarjeta/Tarjeta";
import { INoticiasNormalizadas } from "./types";

const Lista = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [isModalOpened, data, setData, toggleModal] = useModal(false);
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

  return (
    <ListaNoticias>
      {
        noticias.map((noticia) => (
          <>
            <Tarjeta noticia={noticia} handleModal={toggleModal} setData={setData} />
          </>
        ))
      }
      {
        isModalOpened ?
          (
            <CustomModal
              modal={data}
              handleClose={toggleModal} />
          ) : null
      }
    </ListaNoticias>
  )
}
export default Lista;
