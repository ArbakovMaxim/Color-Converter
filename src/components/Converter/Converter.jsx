import ListColorMenu from 'components/listColorsMenu/listColorsMenu';
import { useState } from 'react';
import { BtnPicker, InputColor, WrraperListColum } from './Converter.styled';

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
      visibli();
      return setFlowerSystem(e.target.innerText);
    }
    if (activMenu === 'flowerSystemSecond') {
      visibli();
      return setFlowerSystemSecond(e.target.innerText);
    }
    if (activMenu === 'flowerSystemThird') {
      visibli();
      return setFlowerSystemThird(e.target.innerText);
    }
    if (activMenu === 'flowerSystemFourth') {
      visibli();
      return setFlowerSystemFourth(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystem') {
      rightsVisibli();
      return setRightsFlowerSystem(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystemSecond') {
      rightsVisibli();
      return setRightsFlowerSystemSecond(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystemThird') {
      rightsVisibli();
      return setRightsFlowerSystemThird(e.target.innerText);
    }
    if (rightsActivMenu === 'rightsFlowerSystemFourth') {
      rightsVisibli();
      return setRightsFlowerSystemFourth(e.target.innerText);
    }
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
    <div>
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
      <div>
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
            <ListColorMenu target={targetLi} />
          </WrraperListColum>
        ) : null}
        <InputColor />
      </div>
    </div>
  );
};

export default Converter;
