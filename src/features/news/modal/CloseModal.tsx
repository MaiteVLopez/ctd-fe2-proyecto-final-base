
import { CloseButton } from '../styled';
import { CloseButton as Close } from "../../../assets";

const CloseModal = ({ handleClose }: any) => {

  return (
    <CloseButton onClick={handleClose}>
      {
        <>
          <img src={Close} alt="close-button" />
        </>
      }
    </CloseButton>
  );

}

export default CloseModal
