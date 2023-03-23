// import { useEffect } from 'react';
import {
  Input,
  Tekst,
  WrapperInput,
  WrapperNameColor,
} from './colorsInputPicker.styled';

export const ColorsInputPicker = ({
  activFlower,
  colorInputValue,
  setInput,
  setInputSecond,
  setInputThird,
  setInputFourth,
  input,
  inputSecond,
  inputThird,
  inputFourth,
}) => {
  const namePallete = activFlower.split('');
  return (
    <WrapperInput>
      <WrapperNameColor>
        <Tekst>{namePallete[0] || ''}</Tekst>
      </WrapperNameColor>
      <Input onChange={event => setInput(event.target.value)} value={input} />
      <WrapperNameColor>
        <Tekst>{namePallete[1] || ''}</Tekst>
      </WrapperNameColor>
      <Input
        onChange={event => setInputSecond(event.target.value)}
        value={inputSecond}
      />
      <WrapperNameColor>
        <Tekst>{namePallete[2] || ''}</Tekst>
      </WrapperNameColor>
      <Input
        onChange={event => setInputThird(event.target.value)}
        value={inputThird}
      />
      {namePallete[3] ? (
        <>
          <WrapperNameColor>
            <Tekst>{namePallete[3] || ''}</Tekst>
          </WrapperNameColor>
          <Input
            onChange={event => setInputFourth(event.target.value)}
            value={inputFourth}
          />
        </>
      ) : null}
      <Input />
    </WrapperInput>
  );
};
