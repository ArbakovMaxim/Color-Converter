import styled from "styled-components";

export const WrraperConverter = styled.div`
display: flex;
@media (max-width: 500px) {
   display: block;
  }
`

export const WrraperListColum = styled.div`
height: 245px;
width: 435px;
max-width:100%;
background-color: #D9D9D9;
position: absolute;
z-index: 2
`

export const BtnPicker = styled.button`
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
border: ${(props) => props.border};
width: 100px;
max-width:100%;
height: 40px;
border-top-left-radius:10px;
border-top-right-radius:10px;
&:not(:first-child) {
    margin-left:10px;
    width: 90px;
    @media (max-width: 500px) {
    width: 70px;
    height: 35px;
    margin-left:5px;}
  }
  @media (max-width: 500px) {
    width: 70px;
    height: 35px;}
    `

export const Btn = styled.button`
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
border: ${(props) => props.border};
width: 27px;
height: 40px;
padding: 0;
border-top-left-radius:5px;
border-top-right-radius:5px;
margin-left:10px;
`
export const BtnCopy = styled.button`
position: absolute;
margin-left:10px;
cursor: pointer;
border:${props => props.theme.border};
color:${props => props.theme.basicText};
background-color:${props => props.theme.backgroundBasic};
`

export const InputColor = styled.input`
border:${props => props.theme.border};
color:${props => props.theme.basicText};
background-color:${props => props.theme.backgroundBasic};
padding-left:10px;
display:block;
width: 388px;
max-width:100%;
height: 45px;
  `

export const WrraperArrows = styled.div`
margin-left:5px;
display:flex;
justify-content: center;
align-items: center;
width: 27px;
height: 40px;
color:${props => props.theme.basicText};
@media (max-width: 500px) {
  margin-left:auto;
  margin-right:auto;
  }
`

export const WrraperInput = styled.div`
max-width:100%;
display: flex;
`

export const WrraperRightsBtnGroup = styled.div`
max-width:100%;
margin-left:20px;
@media (max-width: 500px) {
  margin-left:0;}`

export const WrraperCopy = styled.div`
margin-left:10px;
  display:flex;
  justify-content:center;
  align-items:center;
position:relative;`