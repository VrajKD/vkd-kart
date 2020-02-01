import styled, { css } from 'styled-components';

export const BackgroundImageContainer = styled.div`
background-size: cover;
background-position: center;
width: 100%;
height: 100%;
transition: transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);`;

export const MenuItemContent = styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background:white;
opacity: 0.7;
position: absolute;
transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);`;

export const ContentHeading = styled.h1`
font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;`;

export const ContentSubHeading = styled.h1`
font-weight: lighter;
font-size: 16px;`;

export const LargeStyle = css`height: 380px;`;

export const MenuItemContainer = styled.div`
min-width: 30%;
    height: ${({ size }) => (size ? '380px' : '240px')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;    
    &:first-child {
      margin-right: 7.5px;
    }
    &:last-child {
      margin-left: 7.5px;
    }
    
    &:hover{
        cursor: pointer;
        ${BackgroundImageContainer}{
            transform: scale(1.2);
            // transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        ${MenuItemContent}{
            opacity:1;
            // transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
    }
    `;
