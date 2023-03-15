import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`

  text-decoration:none;
  padding-top:15px;
  pading-bottom:15px;
  cursor: pointer;
  color: black;
  &:not(:first-child) {
    margin-left:17px;
  }
`;



export const NavigationContainer = styled.div`
display:flex`