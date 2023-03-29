/* eslint-disable react-hooks/exhaustive-deps */
import ListColorMenu from 'components/listColorsMenu/listColorsMenu';
import { useState, useEffect } from 'react';
import {
  Btn,
  BtnPicker,
  InputColor,
  WrraperInput,
  WrraperListColum,
  WrraperConverter,
  WrraperRightsBtnGroup,
} from './ConverterColor.styled';
import { ColorsInputPicker } from '../colorsInputPicker/colorsInputPicker';
import { columnConvert } from 'util/ColumnConvert';
import { nameActivMenu } from 'util/ActivElement/nameActivMenu';
import { activColorInputValue } from 'util/ActivElement/activColorInputValue';
import { activFlowerSystemt } from 'util/ActivElement/activFlowerSystemt';
import { saturationToInput } from 'util/saturationToInput';
import { activColorInput } from 'util/ActivElement/activColorInput';
import { activInputs } from 'util/ActivElement/actinInput';
import { activInputsSecond } from 'util/ActivElement/activInputSecond';
import { activInputsThird } from 'util/ActivElement/activInputThird';
import { activInputsFourth } from 'util/ActivElement/activInputFourth';
import { activSetInputs } from 'util/ActivElement/activSetInputs';
import { activSetInputsSecond } from 'util/ActivElement/activSetInputsSecond';
import { activSetInputsThird } from 'util/ActivElement/activSetInputsThird';
import { activSetInputsFourth } from 'util/ActivElement/activSetInputsFourth';
import { ActivInputNameOrHEX } from 'util/ActivElement/activInputNameOrHEX';
import { activSetInputNameOrHEX } from 'util/ActivElement/ActivSetInputNameOrHEX';

const ConverterColor = ({ color, bgColor, saturation }) => {
  //////input set
  const [colorInput, setColorInput] = useState('');
  const [colorInputSecond, setColorInputSecond] = useState('');
  const [colorInputThird, setColorInputThird] = useState('');
  const [colorInputFourth, setColorInputFourth] = useState('');
  const [rightsInput, setRightsInput] = useState('');

  //////////////input state in colorsInputPicker
  //Neme or HEX
  const [inputNameOrHEX, setInputNameOrHEX] = useState('');
  const [inputNameOrHEXSecond, setInputNameOrHEXSecond] = useState('');
  const [inputNameOrHEXThird, setInputNameOrHEXThird] = useState('');
  const [inputNameOrHEXFourth, setInputNameOrHEXFourth] = useState('');
  //1
  const [input, setInput] = useState('');
  const [inputSecond, setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
  const [inputFourth, setInputFourth] = useState('');
  //2
  const [input2, setInput2] = useState('');
  const [inputSecond2, setInputSecond2] = useState('');
  const [inputThird2, setInputThird2] = useState('');
  const [inputFourth2, setInputFourth2] = useState('');
  //3
  const [input3, setInput3] = useState('');
  const [inputSecond3, setInputSecond3] = useState('');
  const [inputThird3, setInputThird3] = useState('');
  const [inputFourth3, setInputFourth3] = useState('');
  //4
  const [input4, setInput4] = useState('');
  const [inputSecond4, setInputSecond4] = useState('');
  const [inputThird4, setInputThird4] = useState('');
  const [inputFourth4, setInputFourth4] = useState('');

  ///////activ set
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRights, setIsVisibleRights] = useState(false);
  const [activMenu, setActivMenu] = useState('flowerSystem');
  const [rightsActivMenu, setRightsActivMenu] = useState('rightsFlowerSystem');

  //////color menu set
  const [flowerSystem, setFlowerSystem] = useState('RGB');
  const [flowerSystemSecond, setFlowerSystemSecond] = useState('HLS');
  const [flowerSystemThird, setFlowerSystemThird] = useState('CMYK');
  const [flowerSystemFourth, setFlowerSystemFourth] = useState('HSL');
  const [rightsFlowerSystem, setRightsFlowerSystem] = useState('RGB');
  const [rightsFlowerSystemSecond, setRightsFlowerSystemSecond] =
    useState('HLS');
  const [rightsFlowerSystemThird, setRightsFlowerSystemThird] =
    useState('CMYK');
  const [rightsFlowerSystemFourth, setRightsFlowerSystemFourth] =
    useState('HSL');

  const activNameOrHEX = ActivInputNameOrHEX(
    activMenu,
    inputNameOrHEX,
    inputNameOrHEXSecond,
    inputNameOrHEXThird,
    inputNameOrHEXFourth
  );

  const activSetNameOrHEX = activSetInputNameOrHEX(
    activMenu,
    setInputNameOrHEX,
    setInputNameOrHEXSecond,
    setInputNameOrHEXThird,
    setInputNameOrHEXFourth
  );

  const activSetInput = activColorInput(
    activMenu,
    setColorInput,
    setColorInputSecond,
    setColorInputThird,
    setColorInputFourth
  );

  const activInputRights = nameActivMenu(
    rightsActivMenu,
    rightsFlowerSystem,
    rightsFlowerSystemSecond,
    rightsFlowerSystemThird,
    rightsFlowerSystemFourth
  );

  const colorInputValue = activColorInputValue(
    colorInput,
    colorInputSecond,
    colorInputThird,
    colorInputFourth,
    activMenu
  );

  const activFlower = activFlowerSystemt(
    activMenu,
    flowerSystem,
    flowerSystemSecond,
    flowerSystemThird,
    flowerSystemFourth
  );

  const activInput = activInputs(activMenu, input, input2, input3, input4);
  const activInputSecond = activInputsSecond(
    activMenu,
    inputSecond,
    inputSecond2,
    inputSecond3,
    inputSecond4
  );

  const activInputThird = activInputsThird(
    activMenu,
    inputThird,
    inputThird2,
    inputThird3,
    inputThird4
  );

  const activInputFourth = activInputsFourth(
    activMenu,
    inputFourth,
    inputFourth2,
    inputFourth3,
    inputFourth4
  );

  const setInputActiv = activSetInputs(
    activMenu,
    setInput,
    setInput2,
    setInput3,
    setInput4
  );

  const setInputActivSecond = activSetInputsSecond(
    activMenu,
    setInputSecond,
    setInputSecond2,
    setInputSecond3,
    setInputSecond4
  );

  const setInputActivThird = activSetInputsThird(
    activMenu,
    setInputThird,
    setInputThird2,
    setInputThird3,
    setInputThird4
  );

  const setInputActivFourth = activSetInputsFourth(
    activMenu,
    setInputFourth,
    setInputFourth2,
    setInputFourth3,
    setInputFourth4
  );

  useEffect(() => {
    const colorConverter = saturationToInput(color, saturation, activFlower);
    if (activFlower === 'HEX' || activFlower === 'Name') {
      activSetNameOrHEX(colorConverter);
      return;
    }
    console.log(colorConverter);
    const result = Object.values({ colorConverter }).map(i =>
      Object.values(i)
    )[0];
    if (result.length === 4) {
      setInputActiv(result[0]);
      setInputActivSecond(result[1]);
      setInputActivThird(result[2]);
      setInputActivFourth(result[3]);
      return;
    }
    if (result.length === 3) {
      setInputActiv(result[0]);
      setInputActivSecond(result[1]);
      setInputActivThird(result[2]);
    }
  }, [saturation.s, saturation.h, saturation.v]);

  useEffect(() => {
    if (colorInputValue !== '') {
      const colorConverter = columnConvert(
        activFlower,
        activInputRights,
        colorInputValue,
        color
      );

      const bg = color.getRGB();
      bgColor(bg);
      if (activInputRights === 'HEX' || activInputRights === 'Name') {
        setRightsInput(colorConverter);
        return;
      }
      const result = Object.values({ colorConverter }).map(i =>
        Object.values(i)
      );
      setRightsInput(result);
    }
  }, [activMenu, activFlower, activInputRights, colorInputValue]);

  function targetLi(e) {
    if (activMenu === 'flowerSystem') {
      setFlowerSystem(e.target.innerText);
    }
    if (activMenu === 'flowerSystemSecond') {
      setFlowerSystemSecond(e.target.innerText);
    }
    if (activMenu === 'flowerSystemThird') {
      setFlowerSystemThird(e.target.innerText);
    }
    if (activMenu === 'flowerSystemFourth') {
      setFlowerSystemFourth(e.target.innerText);
    }
    visibli();
  }

  function rightsTargetLi(e) {
    if (rightsActivMenu === 'rightsFlowerSystem') {
      setRightsFlowerSystem(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystemSecond') {
      setRightsFlowerSystemSecond(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystemThird') {
      setRightsFlowerSystemThird(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystemFourth') {
      setRightsFlowerSystemFourth(e.target.innerText);
    }
    rightsVisibli();
  }

  function visibli() {
    setIsVisible(!isVisible);
  }

  function rightsVisibli() {
    setIsVisibleRights(!isVisibleRights);
  }

  function activ(event) {
    if (event.currentTarget.id === 'flowerSystem') {
      return setActivMenu('flowerSystem');
    }
    if (event.currentTarget.id === 'flowerSystemSecond') {
      return setActivMenu('flowerSystemSecond');
    }
    if (event.currentTarget.id === 'flowerSystemThird') {
      return setActivMenu('flowerSystemThird');
    }
    if (event.currentTarget.id === 'flowerSystemFourth') {
      return setActivMenu('flowerSystemFourth');
    }
  }

  function rightsActiv(event) {
    if (event.currentTarget.id === 'rightsFlowerSystem') {
      return setRightsActivMenu('rightsFlowerSystem');
    }
    if (event.currentTarget.id === 'rightsFlowerSystemSecond') {
      return setRightsActivMenu('rightsFlowerSystemSecond');
    }
    if (event.currentTarget.id === 'rightsFlowerSystemThird') {
      return setRightsActivMenu('rightsFlowerSystemThird');
    }
    if (event.currentTarget.id === 'rightsFlowerSystemFourth') {
      return setRightsActivMenu('rightsFlowerSystemFourth');
    }
  }

  function activListColum() {
    visibli();
    activSetInput('');
    activSetNameOrHEX('');
    setInputActiv('');
    setInputActivSecond('');
    setInputActivThird('');
    setInputActivFourth('');
  }

  function rightsActivListColum() {
    rightsVisibli();
  }

  function inputToSetValue(
    activInput,
    activInputSecond,
    activInputThird,
    activInputFourth,
    activNameOrHEX
  ) {
    if (activFlower === 'HEX' || activFlower === 'Name') {
      activSetInput(activNameOrHEX);
      return;
    }
    activSetInput(
      `${activInput},${activInputSecond},${activInputThird},${activInputFourth}`
    );
  }
  useEffect(() => {
    inputToSetValue(
      activInput,
      activInputSecond,
      activInputThird,
      activInputFourth,
      activNameOrHEX
    );
  }, [
    activInput,
    activInputSecond,
    activInputThird,
    activInputFourth,
    activNameOrHEX,
  ]);

  return (
    <WrraperConverter>
      <div>
        <BtnPicker
          backgroundColor={activMenu === 'flowerSystem' ? '#D9D9D9' : '#3F3F40'}
          color={activMenu === 'flowerSystem' ? '#333333' : '#D9D9D9'}
          id="flowerSystem"
          onClick={activ}
        >
          {flowerSystem}
        </BtnPicker>
        <BtnPicker
          backgroundColor={
            activMenu === 'flowerSystemSecond' ? '#D9D9D9' : '#3F3F40'
          }
          color={activMenu === 'flowerSystemSecond' ? '#333333' : '#D9D9D9'}
          id="flowerSystemSecond"
          onClick={activ}
        >
          {flowerSystemSecond}
        </BtnPicker>
        <BtnPicker
          backgroundColor={
            activMenu === 'flowerSystemThird' ? '#D9D9D9' : '#3F3F40'
          }
          color={activMenu === 'flowerSystemThird' ? '#333333' : '#D9D9D9'}
          id="flowerSystemThird"
          onClick={activ}
        >
          {flowerSystemThird}
        </BtnPicker>
        <BtnPicker
          backgroundColor={
            activMenu === 'flowerSystemFourth' ? '#D9D9D9' : '#3F3F40'
          }
          color={activMenu === 'flowerSystemFourth' ? '#333333' : '#D9D9D9'}
          id="flowerSystemFourth"
          onClick={activ}
        >
          {flowerSystemFourth}
        </BtnPicker>
        <Btn onClick={activListColum}>
          {isVisible ? <span>&#9650;</span> : <span>&#9660;</span>}
        </Btn>
        <WrraperInput>
          {isVisible ? (
            <WrraperListColum>
              <ListColorMenu target={targetLi} />
            </WrraperListColum>
          ) : null}
          <ColorsInputPicker
            activFlower={activFlower}
            activSetNameOrHEX={activSetNameOrHEX}
            activNameOrHEX={activNameOrHEX}
            setInput={setInputActiv}
            setInputSecond={setInputActivSecond}
            setInputThird={setInputActivThird}
            setInputFourth={setInputActivFourth}
            input={activInput}
            inputSecond={activInputSecond}
            inputThird={activInputThird}
            inputFourth={activInputFourth}
          />
        </WrraperInput>
      </div>
      <WrraperRightsBtnGroup>
        <BtnPicker
          backgroundColor={
            rightsActivMenu === 'rightsFlowerSystem' ? '#D9D9D9' : '#3F3F40'
          }
          color={
            rightsActivMenu === 'rightsFlowerSystem' ? '#333333' : '#D9D9D9'
          }
          id="rightsFlowerSystem"
          onClick={rightsActiv}
        >
          {rightsFlowerSystem}
        </BtnPicker>
        <BtnPicker
          backgroundColor={
            rightsActivMenu === 'rightsFlowerSystemSecond'
              ? '#D9D9D9'
              : '#3F3F40'
          }
          color={
            rightsActivMenu === 'rightsFlowerSystemSecond'
              ? '#333333'
              : '#D9D9D9'
          }
          id="rightsFlowerSystemSecond"
          onClick={rightsActiv}
        >
          {rightsFlowerSystemSecond}
        </BtnPicker>
        <BtnPicker
          backgroundColor={
            rightsActivMenu === 'rightsFlowerSystemThird'
              ? '#D9D9D9'
              : '#3F3F40'
          }
          color={
            rightsActivMenu === 'rightsFlowerSystemThird'
              ? '#333333'
              : '#D9D9D9'
          }
          id="rightsFlowerSystemThird"
          onClick={rightsActiv}
        >
          {rightsFlowerSystemThird}
        </BtnPicker>
        <BtnPicker
          backgroundColor={
            rightsActivMenu === 'rightsFlowerSystemFourth'
              ? '#D9D9D9'
              : '#3F3F40'
          }
          color={
            rightsActivMenu === 'rightsFlowerSystemFourth'
              ? '#333333'
              : '#D9D9D9'
          }
          id="rightsFlowerSystemFourth"
          onClick={rightsActiv}
        >
          {rightsFlowerSystemFourth}
        </BtnPicker>
        <Btn onClick={rightsActivListColum}>
          {isVisibleRights ? <span>&#9650;</span> : <span>&#9660;</span>}
        </Btn>
        <WrraperInput>
          {isVisibleRights ? (
            <WrraperListColum>
              <ListColorMenu target={rightsTargetLi} />
            </WrraperListColum>
          ) : null}
          <InputColor
            type="text"
            name="rightsInput"
            readOnly
            value={rightsInput}
          />
        </WrraperInput>
      </WrraperRightsBtnGroup>
    </WrraperConverter>
  );
};

export default ConverterColor;
