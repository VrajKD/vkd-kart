import styled, { css } from 'styled-components';

export const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }`;

export const invertedButtonStyles = css`
color: black;
  background-color: white;
  border: 1px solid black;
  // display: none;
    
  &:hover{
    background-color: black;
  color: white;
    display: flex;
  }`;

export const googleButtonStyles = css`
margin-left: 20px;
    background-color: #4285f4;
    border:none;
    transition: background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover{
      background-color: white;
      color:#4285f4;
      border:1px solid #4285f4;
    }`;

export const getButtonStyle = props => {
  if (props.isGoogleSignIn) {
    return googleButtonStyles
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonStyled = styled.button`
min-width: 125px;
width: 100%;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 16px;
font-size: 13px;
text-transform: uppercase;
font-family: 'Montserrat';
font-weight: bolder;

display: flex;
justify-content: center;
margin: 0;
cursor: pointer;
transition: background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);  
${getButtonStyle}
  `;
