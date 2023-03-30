import styled from "styled-components";

export const WrapperInput = styled.div`
max-width:100%;
display: flex `

export const WrapperNameColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  width:25px;
  max-width:100%;
  height:45px;
  border:2px;
  padding-top: 5px;
  &:not(:first-child) {
    margin-left:10px;
    @media (max-width: 500px) {
      margin-left:5px;
  }
  };
`

export const Input = styled.input`
width:55px;
max-width:100%;
height:45px;
`

export const LastInput = styled.input`
margin-left:10px;
width:36px;
max-width:100%;
height:45px;
`

export const InputHexOrName = styled.input`
width:380px;
max-width:100%;
height:45px;`

export const Tekst = styled.p`
color:#2B2B2B;
`

export const WrapperColorPicker = styled.div`
max-width:100%;
 `