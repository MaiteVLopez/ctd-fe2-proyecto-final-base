
import { useCallback, useState } from 'react';
import { CloseButton } from '../styled';
import { INoticiasNormalizadas } from '../types';
import { CloseButton as Close } from "../../../assets";

const CloseModal = (changeState:any) => {

  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  const toggleState = useCallback(
    () => changeState(null),
    [null]
);


  return (
    <CloseButton onClick={() => toggleState}>
      <img src={Close} alt="close-button" />
    </CloseButton>
  );

}

export default CloseModal
