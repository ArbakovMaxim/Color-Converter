import styled from "styled-components";

export const WrapperInput = styled.div`
max-width:100%;
display: flex `

export const WrapperNameColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${props => props.theme.backgroundSecond};
  width:25px;
  max-width:100%;
  height:45px;
  border:${props => props.theme.border};
  margin-top:1px;
  &:not(:first-child) {
    margin-left:10px;
    @media (max-width: 500px) {
      margin-left:5px;
  }
  };
`

export const Input = styled.input`
border:${props => props.theme.border};
color:${props => props.theme.basicText};
background-color:${props => props.theme.backgroundBasic};
padding-left:10px;
width:45px;
max-width:100%;
height:45px;
@media (max-width: 500px) {
  width:25px;
  padding-left:3px;
  }
`

export const LastInput = styled.input`
border:${props => props.theme.border};
color:${props => props.theme.basicText};
background-color:${props => props.theme.backgroundBasic};
margin-left:10px;
width:36px;
max-width:100%;
height:45px;
`

export const InputHexOrName = styled.input`
border:${props => props.theme.border};
color:${props => props.theme.basicText};
background-color:${props => props.theme.backgroundBasic};
padding-left:10px;
width:363px;
max-width:100%;
height:45px;
@media (max-width: 500px) {
  width:263px;
  }`

export const Tekst = styled.p`
color: ${props => props.theme.secondText};
`

export const WrapperColorPicker = styled.div`
max-width:100%;
 `