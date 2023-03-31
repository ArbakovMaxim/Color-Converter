import styled from "styled-components";

export const WrapperColorModelDescription = styled.div`
max-width:1092px;
padding: 40px 24px 35px 54px;
background-color:${props => props.theme.backgroundSecond};
border:${props => props.theme.border};

  @media (max-width: 500px) {
    padding: 26px 26px 16px 30px;
  }
`
export const TextColorModelDescription = styled.p`
color: ${props => props.theme.secondText};
font-weight: 300;
font-size: 16px;
line-height: 25px;
margin-bottom:25px;
@media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`
export const WrapperHTMLlDescription = styled.div`
max-height:210px;
max-width:675px;
background-color: #424243;
padding: 36px 23px 41px 44px;
@media (max-width: 500px) {
    padding: 27px 13px 19px 15px;
  }
`

export const WrapperListСlue = styled.div`
max-height:210px;
max-width:675px;
margin-top:65px;
@media (max-width: 500px) {
   display:none;
  }
`

export const SpanH = styled.span`
color: #E36E02;
`
export const SpanColor = styled.span`
color: #92AAFF;
`
export const SpanRgb = styled.span`
color: #C4E02A;
`
export const TextCode = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 35px;
color: #FFFFFF;

@media (max-width: 500px) {
    font-size: 12px;
    line-height: 18px;
  }
`
export const ListСlue = styled.ol`
font-weight: 300;
font-size: 16px;
line-height: 25px;
padding-left:18px;
color: ${props => props.theme.secondText};
`
export const TextСlue = styled.h3`
margin-bottom: 20px;
font-weight: 400;
font-size: 18px;
line-height: 35px;
color: ${props => props.theme.secondText};
`


