import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 240px;
height:340px;
top:80px;
right:70px;
border: 1px solid black;
padding: 20px;
background-color: white;
z-index: 5;`;

export const CartItemContainer = styled.div`
height: 240px;
overflow-y: auto;
overflow-x: hidden;
margin-bottom: 5px;
&::-webkit-scrollbar{
    height: 0.4em;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #AAA;
    height: 5em;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);  */
}`;

export const EmptyCartText = styled.span`
padding:5px 25px;
        color: slategray;`;