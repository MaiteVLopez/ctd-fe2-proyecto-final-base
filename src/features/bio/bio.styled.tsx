import styled from 'styled-components';
interface IButtonActive {
    active: boolean;
  }


export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2px 0;
    width: 100%;
    height: 100%;
`
export const ContainerButtonStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;

`
export const ImageStyled = styled.img`
    max-width: 200px;
    max-height: 300px;
    margin-bottom: 1rem;

`

export const NameStyled = styled.h3`
    font-size: 2em;
    margin-bottom: 1rem;
`

export const DescriptionStyled = styled.p`
    font-size: 1.3em;
    width: 70%;
    margin: 1rem auto;
`

export const ButtonStyled = styled.button<IButtonActive>`
border-radius: 5px;
border: 1px solid darkgray;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
padding: 1rem;
margin: 1rem;
font-family: "Homer Simpson Revised", sans-serif;
font-size: 1.4rem;
background-color: ${(props) => (props.active ? '#fdd835' : 'none' )};
color: ${(props) => (props.active ? 'whitesmoke' : 'none' )};
text-shadow: ${(props) => ( props.active ? '2px 2px 0 #000000 , 2px -2px 0 #000000 , -2px 2px 0 #000000, '
+'-2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, '
+'-2px 0px 0 #000000, 0px -2px 0 #000000'
: 'none' ) 
};
`
  



