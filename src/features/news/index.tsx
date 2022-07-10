import Lista from "./Lista";
import {
  ContenedorNoticias,
  TituloNoticias,
} from "./styled";
const Noticias = () => {

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <Lista />
    </ContenedorNoticias>
  );
};

export default Noticias;
