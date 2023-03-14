import { Section } from 'components/ui/Section/Section';
import { TextStart, WraperTextStart } from './DescriptionText.styled';

const TextDescription = () => {
  return (
    <Section>
      <WraperTextStart>
        <TextStart>
          С помощью универсального конвертер цветов вы можете легко перевести
          цвет из одной цветовой модели в ряд других.
          <br />
          В первую очередь, калькулятор служит для удобной работы с современными
          форматами CSS3-цветов.
          <br />
          Поддерживается конвертация из HEX в RGB/RGBA и HSL/HSLA, RGB в CMYK,
          XYZ, LAB, и обратно.
          <br />А также специальный функционал для замещения альфа-канала при
          переводе цвета из RGBA в RGB (и HSLA в HSL).
        </TextStart>
      </WraperTextStart>
    </Section>
  );
};

export default TextDescription;
