/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
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
import ConverterColor from 'components/Converter/ConverterColor';
import Color from 'js/color';

const ColorPicker = () => {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 0, a: 1 });
  const [bgRGB, setBgRGB] = useState('');
  const color = new Color();

  // const bgOb = color.getRGB();
  // console.log(bgOb);

  // function setColor() {
  //   const bgString = `rgb(${bgOb.red}, ${bgOb.green}, ${bgOb.blue})`;
  //   setBgRGB(bgString);
  // }

  function colorClass() {
    color.setHSV(hsva.h, hsva.s / 100, hsva.v / 100);
    const result = color.getRGB();
    color.setBgRGB(result.red, result.green, result.blue);
    const bgOb = color.getBgRGB();
    const bgString = `rgb(${bgOb.red}, ${bgOb.green}, ${bgOb.blue})`;
    setBgRGB(bgString);
  }

  // useEffect(() => {
  //   setColor();
  // }, [bgOb]);

  useEffect(() => {
    colorClass();
  }, [hsva]);

  return (
    <Section>
      <WrapperColorPickerSection>
        <WrapperColorPicker>
          <ColorDisplay style={{ backgroundColor: bgRGB }} />
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
        <ConverterColor color={color} />
      </WrapperColorPickerSection>
    </Section>
  );
};

export default ColorPicker;
