import {
  TextColorHTML,
  TextHTML,
  TitlColorHTML,
  TitlPrimaryColors,
  TitlTableColors,
  TitleHTML,
  WraperColorHtml,
  WraperColorsTable,
  WraperColumn,
  WraperColumnThree,
  WraperColumnTwo,
  WraperPrimareColors,
  WraperTablePrimareColors,
  WrapperTextHTML,
  WrapperHTML,
} from './ColorHtml.styled';
import { PrimaryСolorsFirstTable } from '../../components/table/primaryСolors/PrimaryСolorsFirstTable';
import { PrimaryСolorsTwoTable } from '../../components/table/primaryСolors/PrimaryСolorsTwoTable';
import { TableTemplate } from 'components/table/tableTemplate/TableTemplate';
import {
  yellow_tones,
  orange_tones,
  pink_tones,
  red_tones,
  brown_tones,
  green_tones,
  blue_tones,
  purple_tones,
  white_tones,
  grey_tones,
} from '../../util/HTMLColors/index';

const ColorHtml = () => {
  return (
    <WraperColorHtml>
      <WrapperHTML>
        <TitleHTML>HTML ЦВЕТА</TitleHTML>
        <TextHTML>
          На данной странице представлены специальные ключевые слова, которые
          можно применять для обозначения того или иного цвета на интернет
          сайтах, и при разработке на языках программирования для Web, таких как
          HTML, CSS, JavaScript, Flash, и др. В ранних спецификациях W3C было
          определено всего 16 ключевых цветов. В более поздних спецификациях
          дополнительно было определено ещё 130 различных названий цветов.
          Следующая таблица содержит имена, и образцы цветов, которые
          ассоциируются с этими именами.
        </TextHTML>
      </WrapperHTML>
      <WrapperTextHTML>
        <TitlColorHTML>ТАБЛИЦА HTML ЦВЕТОВ</TitlColorHTML>
        <TextColorHTML>
          Имена цветов в HTML не чувствительны к регистру, и могут записываться
          в любой форме Также стоит отметить, что имея 147 различных ключевых
          слов (17 старых и 130 новых), не все цвета в этом списке уникальны.
          Некоторые имена обозначают один и тот же цвет. Так, например, и Grey,
          и Gray обозначают 50-процентный серый цвет #808080, а Magenta — это
          лишь синоним HTML цвета Fuchsia, и ссылается на шестнадцатеричный код
          цвета #FF00FF.
        </TextColorHTML>
      </WrapperTextHTML>
      <TitlPrimaryColors>Основные цвета:</TitlPrimaryColors>
      <WraperPrimareColors>
        <WraperTablePrimareColors>
          <PrimaryСolorsFirstTable />
          <PrimaryСolorsTwoTable />
        </WraperTablePrimareColors>
      </WraperPrimareColors>
      <WraperColorsTable>
        <WraperColumn>
          <TitlTableColors>Красные тона:</TitlTableColors>
          <TableTemplate colorPalette={red_tones} />
          <TitlTableColors>Розовый тона:</TitlTableColors>
          <TableTemplate colorPalette={pink_tones} />
          <TitlTableColors>Оранжевый тона:</TitlTableColors>
          <TableTemplate colorPalette={orange_tones} />
          <TitlTableColors>Желтые тона:</TitlTableColors>
          <TableTemplate colorPalette={yellow_tones} />
          <TitlTableColors>Коричневые тона:</TitlTableColors>
          <TableTemplate colorPalette={brown_tones} />
        </WraperColumn>
        <WraperColumnTwo>
          <TitlTableColors>Зеленые тона:</TitlTableColors>
          <TableTemplate colorPalette={green_tones} />
          <TitlTableColors>Синие тона:</TitlTableColors>
          <TableTemplate colorPalette={blue_tones} />
        </WraperColumnTwo>
        <WraperColumnThree>
          <TitlTableColors>Фиолетовые тона:</TitlTableColors>
          <TableTemplate colorPalette={purple_tones} />
          <TitlTableColors>Белые тона:</TitlTableColors>
          <TableTemplate colorPalette={white_tones} />
          <TitlTableColors>Серые тона:</TitlTableColors>
          <TableTemplate colorPalette={grey_tones} />
        </WraperColumnThree>
      </WraperColorsTable>
    </WraperColorHtml>
  );
};

export default ColorHtml;
