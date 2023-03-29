import styled from "styled-components";

export const WrapperReference = styled.div`
padding-top:78px;
padding-bottom:78px;
`

export const WrapperButtonGroup = styled.div`
margin-left:17px;
padding-top:30px;
padding-bottom:4px;
`
export const WrapperTitleColorModel = styled.div`
`

export const TitlColorModel = styled.h2`
text-align:center;
font-weight: 500;
font-size: 30px;
line-height: 30px;
color: #FFFFFF;
`
export const TextColorModel = styled.p`
text-align:center;
font-weight: 300;
font-size: 18px;
line-height: 25px;
color: #FFFFFF;
padding-left:75px;
padding-right:75px;
`

export const Button = styled.button`
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
border-radius: 10px 10px 0px 0px;
width:150px;
height:55px;
`

export const ListBtn = styled.ul`
display:flex;
flex-wrap: wrap;
margin: -5px -10px;
`

export const ItemBtn = styled.li`
list-style: none;
margin: 5px 10px;
`