import styled from 'styled-components';

export const HeaderTeg = styled.header`
border-bottom: 1px solid #333333;
`

export const WraperHeader = styled.div`
padding-left: 147px;
padding-right: 147px;
display:flex;
justify-content: space-between;
@media (max-width: 1050px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 768px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (max-width: 500px) {
    padding-left: 5px;
    padding-right: 5px;
  }

`
export const Img = styled.img`
margin-top:19px;
width: 491px;
height: 84px;
`

export const Day = styled.div`
width: 35px;
height: 90px;
background-color: red;
`