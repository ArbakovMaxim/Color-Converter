import { useState, useEffect } from 'react';
import { hsvaToHex } from '@uiw/color-convert';
import Hue from '@uiw/react-color-hue';
import Saturation from '@uiw/react-color-saturation';
import { Section } from 'components/ui/Section/Section';
import {
  ColorDisplay,
  WrappeSaturation,
  WrapperColorPicker,
  WrapperColorPickerSection,
  WrapperHue,
} from './colorPicker.styled';

const ColorPicker = () => {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  const [hexa, sethexa] = useState('#adadad');

  useEffect(() => {
    sethexa(hsvaToHex(hsva));
  }, [hsva]);

  return (
    <Section>
      <WrapperColorPickerSection>
        <WrapperColorPicker>
          <ColorDisplay style={{ backgroundColor: hexa }} />
          <WrapperHue>
            <Hue
              hue={hsva.h}
              direction="vertical"
              width={18}
              height={225}
              onChange={newHue => {
                setHsva({ ...hsva, ...newHue });
              }}
            />
          </WrapperHue>
          <WrappeSaturation>
            <Saturation
              style={{ width: '582px', height: '225px' }}
              hsva={hsva}
              onChange={newColor => {
                setHsva({ ...hsva, ...newColor, a: hsva.a });
              }}
            />
          </WrappeSaturation>
        </WrapperColorPicker>
      </WrapperColorPickerSection>
    </Section>
  );
};

export default ColorPicker;
