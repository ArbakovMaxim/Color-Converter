import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`

  text-decoration:none;
  color: black;
`;

export const NavigationItem = styled.li`
list-style-type: none;
padding: 15px 7px;
cursor: pointer;
&:not(:first-child) {
    margin-left:17px;
  }
`

export const NavigationList = styled.ul`
display: flex

`

export const NavigationContainer = styled.div`
display: flex;
align-items:flex-end;
`