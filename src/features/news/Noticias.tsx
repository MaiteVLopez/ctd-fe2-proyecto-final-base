import ListaNoticiasComponent from "./ListaNoticiasComponent";
import {
  ContenedorNoticias,
  TituloNoticias,
} from "./styled";

const Noticias = () => {
  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticiasComponent />
    </ContenedorNoticias>
  );
};

export default Noticias;
