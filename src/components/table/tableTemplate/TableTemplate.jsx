import {
  ColorTD,
  HEXTD,
  NameTD,
  RGBTD,
  Table,
  Tbody,
  WrapperTableColor,
} from '../primaryСolors/PrimaryСolorsTable.styled';

export const TableTemplate = ({ colorPalette }) => {
  return (
    <WrapperTableColor>
      <Table>
        <thead>
          <tr>
            <NameTD>HTML Имя Цвета</NameTD>
            <NameTD align="center">Hex</NameTD>
            <NameTD align="center">RGB</NameTD>
          </tr>
        </thead>
        <Tbody>
          {colorPalette.map(color => {
            return (
              <tr key={color.name}>
                <ColorTD color={`${color.name}`} colorTitle={`${color.color}`}>
                  {color.name}
                </ColorTD>
                <HEXTD>{color.hex}</HEXTD>
                <RGBTD>{color.rgb}</RGBTD>
              </tr>
            );
          })}
        </Tbody>
      </Table>
    </WrapperTableColor>
  );
};
