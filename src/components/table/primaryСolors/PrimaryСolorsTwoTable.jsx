import {
  ColorTD,
  HEXTD,
  NameTD,
  PrimaryTableFour,
  PrimaryTableThree,
  RGBTD,
  Tbody,
  WrapperTableColor,
} from './PrimaryСolorsTable.styled';

export const PrimaryСolorsTwoTable = () => {
  return (
    <WrapperTableColor>
      <PrimaryTableThree>
        <thead>
          <tr>
            <NameTD>HTML Имя Цвета</NameTD>
            <NameTD align="center">Hex</NameTD>
            <NameTD align="center">RGB</NameTD>
          </tr>
        </thead>
        <Tbody>
          <tr>
            <ColorTD color="Yellow" colorTitle="#333333">
              Yellow
            </ColorTD>
            <HEXTD>#FFFF00</HEXTD>
            <RGBTD>255, 255, 0</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Olive" colorTitle="#FFFFFF">
              Olive
            </ColorTD>
            <HEXTD>#808000</HEXTD>
            <RGBTD>128, 128, 0</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Lime" colorTitle="#FFFFFF">
              Lime
            </ColorTD>
            <HEXTD>#00FF00</HEXTD>
            <RGBTD>0, 255, 0</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Green" colorTitle="#FFFFFF">
              Green
            </ColorTD>
            <HEXTD>#008000</HEXTD>
            <RGBTD>0, 128, 0</RGBTD>
          </tr>
        </Tbody>
      </PrimaryTableThree>
      <PrimaryTableFour>
        <Tbody>
          <tr>
            <ColorTD color="Aqua" colorTitle="#333333">
              Aqua
            </ColorTD>
            <HEXTD>#00FFFF</HEXTD>
            <RGBTD>0, 255, 255</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Teal" colorTitle="#FFFFFF">
              Teal
            </ColorTD>
            <HEXTD>#008080</HEXTD>
            <RGBTD>0, 128, 128</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Blue" colorTitle="#FFFFFF">
              Blue
            </ColorTD>
            <HEXTD>#0000FF</HEXTD>
            <RGBTD>0, 0, 255</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Navy" colorTitle="#FFFFFF">
              Navy
            </ColorTD>
            <HEXTD>#000080</HEXTD>
            <RGBTD>0, 0, 128</RGBTD>
          </tr>
        </Tbody>
      </PrimaryTableFour>
    </WrapperTableColor>
  );
};
