import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
//import styles from "./styles.module.css";
import { ButtonStyled,DescriptionStyled,NameStyled,ImageStyled, ContainerButtonStyled, ContainerStyled } from './bio.styled';
const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <ButtonStyled
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        active = { bioActiva.id === nombre  ? true : false }
      >
        {nombre}
      </ButtonStyled>
    ));
  };

  return (
    <ContainerStyled>
      <ContainerButtonStyled>{crearBotones()}</ContainerButtonStyled>
      <div>
        <div>
          <ImageStyled
            src={bioActiva.image}
            alt={bioActiva.nombre}
            />
        </div>
        <div>
          <NameStyled>{bioActiva.nombre}</NameStyled>
          <DescriptionStyled>{bioActiva.descripcion}</DescriptionStyled>
        </div>
      </div>
      </ContainerStyled>
  );
};

export default Bio;