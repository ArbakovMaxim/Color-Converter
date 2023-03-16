import ListColorMenu from 'components/listColorsMenu/listColorsMenu';
import { useState } from 'react';
import {
  BtnPicker,
  InputColor,
  WrraperListColum,
  WrraperOnverter,
  WrraperRightsBtnGroup,
} from './Converter.styled';

const Converter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRights, setIsVisibleRights] = useState(false);
  const [activMenu, setActivMenu] = useState('');
  const [flowerSystem, setFlowerSystem] = useState('RGB');
  const [flowerSystemSecond, setFlowerSystemSecond] = useState('HLS');
  const [flowerSystemThird, setFlowerSystemThird] = useState('CMYK');
  const [flowerSystemFourth, setFlowerSystemFourth] = useState('HSL');
  const [rightsActivMenu, setRightsActivMenu] = useState('');
  const [rightsFlowerSystem, setRightsFlowerSystem] = useState('RGB');
  const [rightsFlowerSystemSecond, setRightsFlowerSystemSecond] =
    useState('HLS');
  const [rightsFlowerSystemThird, setRightsFlowerSystemThird] =
    useState('CMYK');
  const [rightsFlowerSystemFourth, setRightsFlowerSystemFourth] =
    useState('HSL');

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
        {isVisible ? (
          <WrraperListColum>
            <ListColorMenu target={targetLi} />
          </WrraperListColum>
        ) : null}
        <InputColor />
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
        {isVisibleRights ? (
          <WrraperListColum>
            <ListColorMenu target={rightsTargetLi} />
          </WrraperListColum>
        ) : null}
        <InputColor />
      </WrraperRightsBtnGroup>
    </WrraperOnverter>
  );
};

export default Converter;
