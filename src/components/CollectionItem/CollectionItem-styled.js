import styled from 'styled-components';

export const AddItemButton = styled.div`
position: absolute;
        top:255px;
        display: none;`;

export const CollectionItemImage = styled.div`
width: 100%;
        height:95%;
        background-position: center;
        background-size: cover;
        // border-radius: 5%;
        margin-bottom: 14px;`;

export const CollectionItemFooter = styled.div`
height:5%;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 5px;`;

export const CollectionItemFooterName = styled.span`width:90%;`;
export const CollectionItemFooterPrice = styled.span`
width:10%;
text-align: right;`;

export const CollectionItemContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
align-items: center;
height: 350px;
// border-radius: 50%;
overflow: hidden;
position: relative;
margin-bottom: 20px;

&:hover{
        cursor:pointer;
        ${CollectionItemImage}{
            opacity: 0.3;
            transition: opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        ${AddItemButton}{
            display: flex;
            transition:display 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
    }`;
