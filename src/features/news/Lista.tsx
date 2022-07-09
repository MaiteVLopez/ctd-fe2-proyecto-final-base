import { useEffect, useState } from "react";
import ContenedorModalComponent from "./ContenedorModalComponent";
import { obtenerNoticias } from "./fakeRest";
import { ListaNoticias } from "./styled";
import Tarjeta from "./Tarjeta";
import { INoticiasNormalizadas } from "./types";
const data = [
    {
      id: 1,
      titulo: "Los Simpson 'predijeron' escasez de combustible",
      descripcion: `La más reciente es una teoría de que un episodio de 2010 del programa,
      titulado "Lisa Simpson, esta no es tu vida", predijo la crisis de combustible en el Reino Unido.
      Tras los informes de escasez de más de 100.000 vehículos, muchos conductores han estado comprando
      gasolina por pánico, lo que ha llevado a estaciones vacías apenas unas horas después de abiertas.
      Esto ha sido comparado con la escena de Los Simpson en la que se puede ver a Homero llenando el 
      maletero de su coche con 1,000 galones de combustible para ganar un juguete promocional para su hija Maggie.`,
      imagen:
        "https://i2-prod.mirror.co.uk/incoming/article25142408.ece/ALTERNATES/s615b/0_SIMPSONSJPG.jpg",
      fecha: 3,
      esPremium: false,
      fuente:
        "https://www.mirror.co.uk/tv/tv-news/simpsons-fans-convinced-show-predicted-25140770",
    },
    {
      id: 2,
      titulo: "Los Simpsons se asocian con Marvel",
      descripcion: `Los Simpson se han asociado con Marvel para lanzar un nuevo corto exclusivo de Disney+. 
      "The Good, The Bart y The Loki" estará disponible exclusivamente para ver por aquellos que están registrados 
      en el servicio de suscripción.`,
      imagen:
        "https://i2-prod.mirror.co.uk/incoming/article24436503.ece/ALTERNATES/n310p/0_DISNEY.jpg",
      fecha: 2,
      esPremium: false,
      fuente:
        "https://www.mirror.co.uk/tv/tv-news/simpsons-teams-up-marvel-exciting-24435616",
    },
    {
      id: 3,
      titulo:
        "Los Simpson mostraron a Richard Branson en el espacio en un episodio de 2014",
      descripcion: `En un capítulo que se emitió por primera vez en 2014, un Richard
      Branson animado se reclinó y sonrió mientras flotaba en una nave espacial y admiraba algunas
      obras de arte. Naturalmente, los fanáticos de Los Simpson no tardaron mucho en
      expresar su sorpresa ya que la serie había previsto otro gran evento.`,
      imagen:
        "https://i2-prod.mirror.co.uk/incoming/article24547200.ece/ALTERNATES/s615b/0_EHP_CHP_160721The-Simpsons_53631JPG.jpg",
      fecha: 6,
      esPremium: true,
      fuente:
        "https://www.mirror.co.uk/tv/tv-news/simpsons-correctly-predicts-future-again-24547074",
    },
  ];
const Lista = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
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
                    <Tarjeta noticia={noticia} />      
                ))
            }  
        </ListaNoticias>
    )
}
export default Lista;