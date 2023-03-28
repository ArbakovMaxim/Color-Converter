import styled from "styled-components";

export const ListNameColor = styled.ul`
position: absolute;
padding-top:21px;
padding-left:30px;
padding-right:61px;

display:flex;
flex-direction: column;
flex-wrap: wrap;
height: 225px;
width: 435px;
&:not(:last-child) {
    gap-right:46px;;
  }

`

export const ItemtColorMenu = styled.li`
position: relative;
width : auto;
height:35px;
list-style-type: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 35px;
`