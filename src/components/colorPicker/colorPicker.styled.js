import styled from 'styled-components';


export const WrapperColorPickerSection = styled.div`
max-width: 960px;
background-color: ${props => props.theme.backgroundSecond};
padding-bottom: 53px;
padding-left:87px;
padding-right:110px;
padding-top: 38px;
@media (max-width: 500px) {
   padding:28px 20px 47px 24px;
  }
`


export const WrapperColorPicker = styled.div`
display:flex;
padding-bottom:55px;

`

export const WrapperHue = styled.div`
margin-left:5vw;
@media (max-width: 500px) {
  margin-left:12px;
  }
`
export const ColorDisplay = styled.div`
min-width:103px;
width:225px;
height:225px;
@media (max-width: 500px) {
  width:103px;
  }

`
export const WrappeSaturation = styled.div`
max-width:100%;
margin-left:12px;
`
