import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;`;

export const CheckoutImageContainer = styled.div`
width:23%;
padding-right: 15px;`;

export const CheckoutImage = styled.img`
width:100%;
height: 100%;`;

export const CheckoutItemText = styled.span`
width:23%;`;

export const CheckoutQuantityContainer = styled.div`
display: flex;
width:21%;
`;

export const CheckoutQuantityArrow = styled.div`cursor: pointer;`;
export const CheckoutQuantityValue = styled.div`padding:0px 10px;`;

export const CheckoutItemRemove = styled.div`
cursor: pointer;
padding-left:12px ;`;
