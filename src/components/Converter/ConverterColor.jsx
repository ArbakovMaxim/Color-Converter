import ListColorMenu from 'components/listColorsMenu/listColorsMenu';
import { useState, useEffect } from 'react';
import {
  BtnPicker,
  InputColor,
  WrraperInput,
  WrraperListColum,
  WrraperOnverter,
  WrraperRightsBtnGroup,
} from './ConverterColor.styled';
import { columnConvert } from 'util/ColumnConvert';
import { nameActivMenu } from 'util/ActivElement/nameActivMenu';
import { activColorInputValue } from 'util/ActivElement/activColorInputValue';
import { activFlowerSystemt } from 'util/ActivElement/activFlowerSystemt';

const ConverterColor = ({ color }) => {
  //////input set
  const [colorInput, setColorInput] = useState('');
  const [colorInputSecond, setColorInputSecond] = useState('');
  const [colorInputThird, setColorInputThird] = useState('');
  const [colorInputFourth, setColorInputFourth] = useState('');
  const [rightsInput, setrRightsInput] = useState('');

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

  useEffect(() => {
    if (colorInputValue !== '') {
      const colorConverter = columnConvert(
        activFlower,
        activInputRights,
        colorInputValue,
        color
      );
      if (activInputRights === 'HEX' || activInputRights === 'Name') {
        setrRightsInput(colorConverter);
        return;
      }
      const result = Object.values({ colorConverter }).map(i =>
        Object.values(i)
      );
      setrRightsInput(result);
    }
    console.log('что то не так');
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
    visibli();
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
    rightsVisibli();
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

  return (
    <WrraperOnverter>
      <div>
        <BtnPicker id="flowerSystem" onClick={activ}>
          {flowerSystem}
        </BtnPicker>
        <BtnPicker id="flowerSystemSecond" onClick={activ}>
          {flowerSystemSecond}
        </BtnPicker>
        <BtnPicker id="flowerSystemThird" onClick={activ}>
          {flowerSystemThird}
        </BtnPicker>
        <BtnPicker id="flowerSystemFourth" onClick={activ}>
          {flowerSystemFourth}
        </BtnPicker>
        <WrraperInput>
          {isVisible ? (
            <WrraperListColum>
              <ListColorMenu target={targetLi} />
            </WrraperListColum>
          ) : null}
          {activMenu === 'flowerSystem' ? (
            <InputColor
              type="text"
              name="ColorInput"
              value={colorInput}
              onChange={event => setColorInput(event.target.value)}
            />
          ) : null}
          {activMenu === 'flowerSystemSecond' ? (
            <InputColor
              type="text"
              name="ColorInputSecond"
              value={colorInputSecond}
              onChange={event => setColorInputSecond(event.target.value)}
            />
          ) : null}
          {activMenu === 'flowerSystemThird' ? (
            <InputColor
              type="text"
              name="ColorInputThird"
              value={colorInputThird}
              onChange={event => setColorInputThird(event.target.value)}
            />
          ) : null}
          {activMenu === 'flowerSystemFourth' ? (
            <InputColor
              type="text"
              name="colorInputFourth"
              value={colorInputFourth}
              onChange={event => setColorInputFourth(event.target.value)}
            />
          ) : null}
        </WrraperInput>
      </div>
      <WrraperRightsBtnGroup>
        <BtnPicker id="rightsFlowerSystem" onClick={rightsActiv}>
          {rightsFlowerSystem}
        </BtnPicker>
        <BtnPicker id="rightsFlowerSystemSecond" onClick={rightsActiv}>
          {rightsFlowerSystemSecond}
        </BtnPicker>
        <BtnPicker id="rightsFlowerSystemThird" onClick={rightsActiv}>
          {rightsFlowerSystemThird}
        </BtnPicker>
        <BtnPicker id="rightsFlowerSystemFourth" onClick={rightsActiv}>
          {rightsFlowerSystemFourth}
        </BtnPicker>
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
    </WrraperOnverter>
  );
};

export default ConverterColor;
