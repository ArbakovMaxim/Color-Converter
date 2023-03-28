import websafe_colors from '../../util/websafe_colors.json';
import {
  ColorBox,
  ColorHEX,
  ColorRGB,
  HexTitle,
  List,
  ListItem,
  NameTitle,
  TextSafe,
  TextTable,
  TitleSafe,
  TitleTable,
  WraperColorWebSafe,
  WrapperTable,
  WrapperHex,
  WrapperHexAndRgb,
  WrapperRgb,
  WrapperSafe,
} from './ColorWebSafe.styled';
import Color from '../../js/color';

const ColorWebSafe = () => {
  const colors = new Color();
  return (
    <WraperColorWebSafe>
      <WrapperSafe>
        <TitleSafe>БЕЗОПАСНЫЕ ВЕБ-ЦВЕТА</TitleSafe>
        <TextSafe>
          Вашему вниманию предлагается палитра цветов, рекомендуемых для
          экранного дизайна. Безопасные цвета всегда неизменны при переходе от
          одного браузера к другому, от одного монитора к другому, или от одной
          платформы к другой, с их различными разрешениями и возможностями
          цветопередачи.
          <br />
          Если веб-браузер не в состоянии правильно отобразить тот или иной
          цвет, то он пытается подобрать похожий или смешивает несколько
          соседних цветов. Может так случиться, что исходный цвет будет замещён
          чем-то совершенно неподходящим.
          <br />
          Сегодня уже весьма спорна целесообразность использования безопасной
          палитры, однако используя её, вы будете уверены, что цвета будут
          выглядеть неизменно хорошо и без искажений даже на очень старых
          компьютерах, вплоть до 8-битного режима отображения с поддержкой всего
          256 цветов.
          <br />
          Безопасные цвета были выведены математически, а не потому, что они
          кому-то больше пришлись по душе. Для получения безопасного цвета из
          Красного, Зелёного и Синего, нужно использовать только данные
          десятичные значения: 0, 51, 102, 153, 204, 255 — и никакие другие.
          Каждое из трёх шестнадцатеричных значений не должно отличаться от 00,
          33, 66, 99, CC, FF.
        </TextSafe>
      </WrapperSafe>
      <WrapperTable>
        <TitleTable>ТАБЛИЦА “БЕЗОПАСНЫХ” ВЕБ-ЦВЕТОВ</TitleTable>
        <TextTable>
          Палитра состоит из 216 безопасных веб-цветов. Под каждым цветом
          указаны два значения — RGB, для создания цвета в графическом
          редакторе, и его шестнадцатеричных HEX-код, для обозначения цвета в
          HTML.
        </TextTable>
      </WrapperTable>
      <List>
        {websafe_colors.map(color => {
          const bgString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          colors.setRGB(color[0], color[1], color[2]);
          const rgb = colors.getRGBA();
          return (
            <ListItem key={bgString}>
              <ColorBox style={{ backgroundColor: bgString }} />
              <WrapperHexAndRgb>
                <WrapperHex>
                  <HexTitle>HEX</HexTitle>
                  <ColorHEX>#{colors.getHEX()}</ColorHEX>
                </WrapperHex>
                <WrapperRgb>
                  <NameTitle>RGB</NameTitle>
                  <ColorRGB>
                    {rgb.red} {rgb.green} {rgb.blue}
                  </ColorRGB>
                </WrapperRgb>
              </WrapperHexAndRgb>
            </ListItem>
          );
        })}
      </List>
    </WraperColorWebSafe>
  );
};

export default ColorWebSafe;
