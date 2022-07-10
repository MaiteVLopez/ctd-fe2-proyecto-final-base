
import { CloseButton } from '../styled';
import { CloseButton as Close } from "../../../assets";
<<<<<<< HEAD

const CloseModal = ({ handleClose }: any) => {

  return (
    <CloseButton onClick={handleClose}>
      {
        <>
          <img src={Close} alt="close-button" />
        </>
=======
import useModal from '../CustomModal';
import React, { useState } from 'react';
import { INoticiasNormalizadas } from '../ContenedorModalComponent';

const CloseModal = ({handleClose}:any) => {
 
  return (
    <CloseButton onClick={handleClose}>
      {
      <>
      <img src={Close} alt="close-button" />
      </>
>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
      }
    </CloseButton>
  );

}

export default CloseModal
