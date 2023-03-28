import {
  ColorTD,
  HEXTD,
  NameTD,
  PrimaryTable,
  PrimaryTableTwo,
  RGBTD,
  Tbody,
  WrapperTableColor,
} from './PrimaryСolorsTable.styled';

export const PrimaryСolorsFirstTable = () => {
  return (
    <WrapperTableColor>
      <PrimaryTable>
        <thead>
          <tr>
            <NameTD>HTML Имя Цвета</NameTD>
            <NameTD align="center">Hex</NameTD>
            <NameTD align="center">RGB</NameTD>
          </tr>
        </thead>
        <Tbody>
          <tr>
            <ColorTD color="Black" colorTitle="#FFFFFF">
              Black
            </ColorTD>
            <HEXTD>#000000</HEXTD>
            <RGBTD>0, 0, 0</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Gray" colorTitle="#FFFFFF">
              Gray
            </ColorTD>
            <HEXTD>#808080</HEXTD>
            <RGBTD>128, 128, 128</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Silver" colorTitle="#FFFFFF">
              Silver
            </ColorTD>
            <HEXTD>#C0C0C0</HEXTD>
            <RGBTD>192, 192, 192</RGBTD>
          </tr>
          <tr>
            <ColorTD color="White" colorTitle="#333333">
              White
            </ColorTD>
            <HEXTD>#FFFFFF</HEXTD>
            <RGBTD>255, 255, 255</RGBTD>
          </tr>
        </Tbody>
      </PrimaryTable>
      <PrimaryTableTwo>
        <Tbody>
          <tr>
            <ColorTD color="Fuchsia" colorTitle="#FFFFFF">
              Fuchsia
            </ColorTD>
            <HEXTD>#FF00FF</HEXTD>
            <RGBTD>255, 0, 255</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Purple" colorTitle="#FFFFFF">
              Purple
            </ColorTD>
            <HEXTD>#800080</HEXTD>
            <RGBTD>128, 0, 128</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Red" colorTitle="#FFFFFF">
              Red
            </ColorTD>
            <HEXTD>#FF0000</HEXTD>
            <RGBTD>255, 0, 0</RGBTD>
          </tr>
          <tr>
            <ColorTD color="Maroon" colorTitle="#FFFFFF">
              Maroon
            </ColorTD>
            <HEXTD>#800000</HEXTD>
            <RGBTD>128, 0, 0</RGBTD>
          </tr>
        </Tbody>
      </PrimaryTableTwo>
    </WrapperTableColor>
  );
};
