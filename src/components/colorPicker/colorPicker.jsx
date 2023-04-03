/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Hue from '@uiw/react-color-hue';
import Saturation from '@uiw/react-color-saturation';
import { Section } from 'components/ui/Section/Section';
import {
  ColorDisplay,
  ErrorMessage,
  WrappeSaturation,
  Wrapper,
  WrapperColorPicker,
  WrapperColorPickerSection,
  WrapperHue,
} from './colorPicker.styled';
import ConverterColor from 'components/Converter/ConverterColor';
import Color from 'js/color';
import ColorReference from 'components/colorReference/ColorReference';
import { useResize } from 'hook/useResize';

const ColorPicker = () => {
  const [hsva, setHsva] = useState({ h: 25, s: 25, v: 25, a: 1 });
  const [bgRGB, setBgRGB] = useState('');
  const [errorMassege, setErrorMassege] = useState('');
  const color = new Color();

  const { isScreenSm } = useResize();
  const direction = isScreenSm ? 'vertical' : 'horizontal';
  const widthHue = isScreenSm ? 18 : 231;
  const heightHue = isScreenSm ? 225 : 18;
  const widthSaturation = isScreenSm ? '38vw' : '231px';
  const heightSaturation = isScreenSm ? '225px' : '155px';

  function colorClass() {
    color.setHSV(hsva.h, hsva.s / 100, hsva.v / 100);
    const result = color.getRGB();
    color.setBgRGB(result.red, result.green, result.blue);
    const bgOb = color.getBgRGB();
    const bgString = `rgb(${bgOb.red}, ${bgOb.green}, ${bgOb.blue})`;
    setBgRGB(bgString);
  }
  function bgColorInInput(bgColor) {
    const bgString = `rgb(${bgColor.red}, ${bgColor.green}, ${bgColor.blue})`;
    setBgRGB(bgString);
  }

  useEffect(() => {
    colorClass();
  }, [hsva]);

  return (
    <Section>
      <WrapperColorPickerSection>
        <WrapperColorPicker>
          <ColorDisplay style={{ backgroundColor: bgRGB }} />
          <Wrapper>
            <WrappeSaturation>
              <Saturation
                style={{
                  maxWidth: '100%',
                  width: widthSaturation,
                  height: heightSaturation,
                }}
                hsva={hsva}
                onChange={newColor => {
                  setHsva({ ...hsva, ...newColor, a: hsva.a });
                }}
              />
            </WrappeSaturation>
            <WrapperHue>
              <Hue
                hue={hsva.h}
                direction={direction}
                width={widthHue}
                height={heightHue}
                onChange={newHue => {
                  setHsva({ ...hsva, ...newHue });
                }}
              />
            </WrapperHue>
          </Wrapper>
        </WrapperColorPicker>
        <ConverterColor
          color={color}
          bgColor={bgColorInInput}
          saturation={hsva}
          setErrorMassege={setErrorMassege}
        />
        {errorMassege !== '' ? (
          <ErrorMessage>{errorMassege}</ErrorMessage>
        ) : null}
      </WrapperColorPickerSection>
      <ColorReference />
    </Section>
  );
};

export default ColorPicker;
