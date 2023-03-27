import {
  WraperColorHtml,
  WraperColorsTable,
  WraperPrimareColors,
  WraperTablePrimareColors,
} from './ColorHtml.styled';
import { PrimaryСolorsFirstTable } from '../../components/table/primaryСolors/PrimaryСolorsFirstTable';
import { PrimaryСolorsTwoTable } from '../../components/table/primaryСolors/PrimaryСolorsTwoTable';
import { TableTemplate } from 'components/table/primaryСolors/tableTemplate/TableTemplate';
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
      <h2>HTML ЦВЕТА</h2>
      <p>
        На данной странице представлены специальные ключевые слова, которые
        можно применять для обозначения того или иного цвета на интернет сайтах,
        и при разработке на языках программирования для Web, таких как HTML,
        CSS, JavaScript, Flash, и др. В ранних спецификациях W3C было определено
        всего 16 ключевых цветов. В более поздних спецификациях дополнительно
        было определено ещё 130 различных названий цветов. Следующая таблица
        содержит имена, и образцы цветов, которые ассоциируются с этими именами.
      </p>
      <h2>ТАБЛИЦА HTML ЦВЕТОВ</h2>
      <p>
        Имена цветов в HTML не чувствительны к регистру, и могут записываться в
        любой форме Также стоит отметить, что имея 147 различных ключевых слов
        (17 старых и 130 новых), не все цвета в этом списке уникальны. Некоторые
        имена обозначают один и тот же цвет. Так, например, и Grey, и Gray
        обозначают 50-процентный серый цвет #808080, а Magenta — это лишь
        синоним HTML цвета Fuchsia, и ссылается на шестнадцатеричный код цвета
        #FF00FF.
      </p>
      <WraperPrimareColors>
        <h3>Основные цвета:</h3>
        <WraperTablePrimareColors>
          <PrimaryСolorsFirstTable />
          <PrimaryСolorsTwoTable />
        </WraperTablePrimareColors>
      </WraperPrimareColors>
      <WraperColorsTable>
        <div>
          <h3>Красные тона:</h3>
          <TableTemplate colorPalette={red_tones} />
          <h3>Розовый тона:</h3>
          <TableTemplate colorPalette={pink_tones} />
          <h3>Оранжевый тона:</h3>
          <TableTemplate colorPalette={orange_tones} />
          <h3>Желтые тона:</h3>
          <TableTemplate colorPalette={yellow_tones} />
          <h3>Коричневые тона:</h3>
          <TableTemplate colorPalette={brown_tones} />
        </div>
        <div>
          <h3>Зеленые тона:</h3>
          <TableTemplate colorPalette={green_tones} />
          <h3>Синие тона:</h3>
          <TableTemplate colorPalette={blue_tones} />
        </div>
        <div>
          <h3>Фиолетовые тона:</h3>
          <TableTemplate colorPalette={purple_tones} />
          <h3>Белые тона:</h3>
          <TableTemplate colorPalette={white_tones} />
          <h3>Серые тона:</h3>
          <TableTemplate colorPalette={grey_tones} />
        </div>
      </WraperColorsTable>
    </WraperColorHtml>
  );
};

export default ColorHtml;
