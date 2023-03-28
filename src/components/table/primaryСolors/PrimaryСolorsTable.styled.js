import styled from 'styled-components';

export const WrapperTableColor = styled.div`
background-color:#333333;
margin-bottom:32px;
`;

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
background-color: #424243;
color: #FFFFFF;
`;

export const RGBTD = styled.td`
text-align: center;
width:90px;
height:30px;
background-color: #424243;
color: #FFFFFF;
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

export const Table = styled.table`
padding: 17px 15px;
border-spacing: 5px 5px;
`;

export const PrimaryTable = styled.table`
border-spacing: 5px 5px;
padding: 17px 12px 0px 33px;
@media (max-width: 1050px) {
    padding: 17px 15px;
  }
`;

export const PrimaryTableTwo = styled.table`
border-spacing: 5px 5px;
padding: 24px 12px 28px 33px;
@media (max-width: 1050px) {
    padding: 17px 15px;
  }
`;

export const PrimaryTableThree = styled.table`
border-spacing: 5px 5px;
padding: 17px 33px 0px 12px;
@media (max-width: 1050px) {
    padding: 17px 15px;
  }
`;

export const PrimaryTableFour = styled.table`
border-spacing: 5px 5px;
padding: 24px 33px 28px 12px;
@media (max-width: 1050px) {
    padding: 17px 15px;
  }
  `;
