import styled from "styled-components";

export const WrapperInput = styled.div`
display: flex `

export const WrapperNameColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  width:25px;
  height:45px;
  border:2px;
  padding-top: 5px;
  &:not(:first-child) {
    margin-left:10px;
  };
`

export const Input = styled.input`
width:55px;
height:45px;
`

export const LastInput = styled.input`
margin-left:10px;
width:36px;
height:45px;
`

export const InputHexOrName = styled.input`
width:380px;
height:45px;`

export const Tekst = styled.p`
color:#2B2B2B;

`