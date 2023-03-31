import styled from "styled-components";

export const WrapperReference = styled.div`
padding-top:78px;
padding-bottom:78px;
`

export const WrapperButtonGroup = styled.div`
max-width:1170px;
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
color: ${props => props.theme.basicText};
@media (max-width: 500px) {
    font-size: 20px;
  }
`
export const TextColorModel = styled.p`
text-align:center;
font-weight: 300;
font-size: 18px;
line-height: 25px;
margin-top:23px;
color: ${props => props.theme.secondText};
padding-left:75px;
padding-right:75px;
@media (max-width: 500px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export const Button = styled.button`
font-weight: 500;
font-size: 20px;
line-height: 30px;
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
border: ${(props) => props.border};
border-radius: 10px 10px 0px 0px;
width:150px;
height:55px;
@media (max-width: 786px) {
    width:105px;
    height:40px;
  }
`

export const ListBtn = styled.ul`
display:flex;
flex-wrap: wrap;
margin: -5px -10px;
`

export const ItemBtn = styled.li`
border:none;
list-style: none;
margin: 5px 10px;
`