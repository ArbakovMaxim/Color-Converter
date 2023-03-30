import { useEffect, useState } from 'react';
import {
  Input,
  InputHexOrName,
  LastInput,
  Tekst,
  WrapperColorPicker,
  WrapperInput,
  WrapperNameColor,
} from './colorsInputPicker.styled';

export const ColorsInputPicker = ({
  activFlower,
  activSetNameOrHEX,
  activNameOrHEX,
  setInput,
  setInputSecond,
  setInputThird,
  setInputFourth,
  input,
  inputSecond,
  inputThird,
  inputFourth,
}) => {
  const [nameOrHex, setNameOrHex] = useState(false);
  const namePallete = activFlower.split('');

  useEffect(() => {
    if (activFlower === 'HEX' || activFlower === 'Name') {
      setNameOrHex(true);
    } else {
      setNameOrHex(false);
    }
  }, [activFlower]);

  return (
    <WrapperColorPicker>
      {nameOrHex ? (
        <WrapperInput>
          <WrapperNameColor>
            <Tekst>#</Tekst>
          </WrapperNameColor>
          <InputHexOrName
            onChange={event => activSetNameOrHEX(event.target.value)}
            value={activNameOrHEX}
          />
        </WrapperInput>
      ) : (
        <WrapperInput>
          <WrapperNameColor>
            <Tekst>{namePallete[0] || ''}</Tekst>
          </WrapperNameColor>
          <Input
            onChange={event =>
              setInput(event.target.value.replace(/[^0-9 .]/g, ''))
            }
            value={input}
          />
          <WrapperNameColor>
            <Tekst>{namePallete[1] || ''}</Tekst>
          </WrapperNameColor>
          <Input
            onChange={event =>
              setInputSecond(event.target.value.replace(/[^0-9 .]/g, ''))
            }
            value={inputSecond}
          />
          <WrapperNameColor>
            <Tekst>{namePallete[2] || ''}</Tekst>
          </WrapperNameColor>
          <Input
            onChange={event =>
              setInputThird(event.target.value.replace(/[^0-9 .]/g, ''))
            }
            value={inputThird}
          />
          {namePallete[3] ? (
            <>
              <WrapperNameColor>
                <Tekst>{namePallete[3] || ''}</Tekst>
              </WrapperNameColor>
              <Input
                onChange={event =>
                  setInputFourth(event.target.value.replace(/[^0-9 .]/g, ''))
                }
                value={inputFourth}
              />
            </>
          ) : null}
          <LastInput readOnly value="100%" />
        </WrapperInput>
      )}
    </WrapperColorPicker>
  );
};
