import styled from 'styled-components';

export const ColorTD = styled.td`
text-align: center;
width:158px;
height:30px;
background-color: ${(props) => props.color};
color: ${(props) => props.colorTitle};
`;

export const HEXTD = styled.td`
font-weight: 300;
font-size: 12px;
line-height: 18px;
text-align: center;
width:83px;
height:30px;
background-color: #F5F5F5;
color: ${(props) => props.colorTitle};
`;

export const RGBTD = styled.td`
text-align: center;
width:90px;
height:30px;
background-color: #F5F5F5;
color: ${(props) => props.colorTitle};
font-weight: 300;
font-size: 12px;
line-height: 18px;
`;

export const NameTD = styled.td`
text-align: ${(props) => props.align};
color: white;
font-weight: 400;
font-size: 14px;
line-height: 18px;
`;

export const Tbody = styled.tbody`
`;

export const WrapperTable = styled.div`
margin-top:24px
`;

export const WrapperTableTwo = styled.div`
margin-left:25px
`;

export const WrapperTableColor = styled.div`
background-color:#333333;
`;

export const Table = styled.table`
padding: 17px 15px;
`;