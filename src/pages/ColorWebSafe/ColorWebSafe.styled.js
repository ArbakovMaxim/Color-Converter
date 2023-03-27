import styled from 'styled-components';

export const WraperColorWebSafe = styled.div`
  width-max:1440px;
  height: 100%;
  background-color: #f5fffa;
  padding-left: 147px;
  padding-right: 147px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f8f8f8;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 65px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

// export const ColorList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 50px;
// `;




export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 196px;
  height: 65px;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f6f6f6;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #ebebeb;
  }
`;

export const HexTitle = styled.p`
line-height: 12px;
    font-size: 12px;
    font-size: 12px;
    color: #333;
    font-weight: 400;
`;

export const NameTitle = styled.p`
    line-height: 12px;
    font-size: 12px;
    color: #666;
    font-weight: 400;
`;

export const ColorHEX = styled.p`
    padding: 7px;
    line-height: 12px;
    font-size: 12px;
    color: #666;
    font-weight: 400;
`;
export const ColorRGB = styled.p`
    padding: 7px;
    line-height: 12px;
    font-size: 12px;
    color: #666;
    font-weight: 400;
`;

export const WrapperHexAndRgb = styled.div`
  display:block;
`;
export const WrapperHex = styled.div`
margin-left:1px;
align-items: center;
weight:120px;
height: 30px;
  display:flex;
`;
export const WrapperRgb = styled.div`
margin-left:1px;
align-items: center;
weight:120px;
height: 30px;
  display:flex;
`;