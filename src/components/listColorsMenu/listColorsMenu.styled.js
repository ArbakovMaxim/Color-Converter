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
  /* display:grid; */
  /* grid-template-columns: 48px 44px 38px 78px;
  grid-template: repeat(6,48px)/ repeat(6,44px)/ repeat(6,38px)/ repeat(3,78px); */
  /* grid-template-columns: 48px 44px 38px 78px;
  grid-gap: 5px 50px;
  align-items: start; */

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