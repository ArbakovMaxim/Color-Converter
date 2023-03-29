import styled from "styled-components";

export const WrraperListColum = styled.div`
height: 245px;
width: 435px;
background-color: #D9D9D9;
position: absolute;
z-index: 2
`

export const BtnPicker = styled.button`
background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
width: 100px;
height: 40px;
border-top-left-radius:10px;
border-top-right-radius:10px;
&:not(:first-child) {
    margin-left:10px;
    width: 90px;
  }`

export const Btn = styled.button`
background-color:#D9D9D9;
width: 27px;
height: 40px;
padding: 0;
border-top-left-radius:5px;
border-top-right-radius:5px;
margin-left:10px;
`

export const InputColor = styled.input`
display:block;
width: 390px;
height: 45px;
  `

export const WrraperConverter = styled.div`
display: flex;
`

export const WrraperInput = styled.div`
display: relative;
`

export const WrraperRightsBtnGroup = styled.div`
margin-left:53px`