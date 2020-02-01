import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
width:100%;
display: flex;
justify-content: space-between;
height: 70px;
margin-bottom: 25px;`;

export const LogoContainer = styled(Link)`
width:70px;
height: 100%;
padding:25px;`;

export const OptionLinksContainer = styled.div`
width:50%;
height: 100%;
align-items: center;
display: flex;
justify-content: flex-end;`;

export const OptionLink = styled(Link)`
padding:10px 25px;
cursor: pointer;`;