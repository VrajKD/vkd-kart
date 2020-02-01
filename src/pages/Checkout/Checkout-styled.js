import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
width: 55%;
display: flex;
min-height: 90vh;
margin:50px auto 0;
flex-direction: column;
align-items: center;
button{
    margin-left: auto;
    margin-top: 20px;
}`;

export const CheckoutHeaderContainer = styled.div`
width:100%;
border-bottom:1px solid slategrey;
display: flex;
height: 35px;
justify-content: space-between;`;

export const CheckoutHeaderBlock = styled.div`
width: 23%;
        
&:last-child{
    width:12%;
}`;

export const CheckoutTotal = styled.div`
margin-left: auto;
margin-top:40px;
font-size:25px; ;`;

export const StripeTestText = styled.div`
color: tomato;
        font-size: 15px;
        margin: 20px auto;


        hr{
            background-color:lightgrey;
            border:0.5px solid lightgray;
        }`;