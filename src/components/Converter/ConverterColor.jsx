import ListColorMenu from 'components/listColorsMenu/listColorsMenu';
import { useState, useEffect } from 'react';
import Converter from '../../js/converter';
import {
  BtnPicker,
  InputColor,
  WrraperInput,
  WrraperListColum,
  WrraperOnverter,
  WrraperRightsBtnGroup,
} from './ConverterColor.styled';

const ConverterColor = () => {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleRights, setIsVisibleRights] = useState(false);
  const [activMenu, setActivMenu] = useState('flowerSystem');
  const [flowerSystem, setFlowerSystem] = useState('RGB');
  const [flowerSystemSecond, setFlowerSystemSecond] = useState('HLS');
  const [flowerSystemThird, setFlowerSystemThird] = useState('CMYK');
  const [flowerSystemFourth, setFlowerSystemFourth] = useState('HSL');
  const [rightsActivMenu, setRightsActivMenu] = useState('rightsFlowerSystem');
  const [rightsFlowerSystem, setRightsFlowerSystem] = useState('RGB');
  const [rightsFlowerSystemSecond, setRightsFlowerSystemSecond] =
    useState('HLS');
  const [rightsFlowerSystemThird, setRightsFlowerSystemThird] =
    useState('CMYK');
  const [rightsFlowerSystemFourth, setRightsFlowerSystemFourth] =
    useState('HSL');

  // const activList = [
  //   { activBtn: 'flowerSystem', activ: flowerSystem },
  //   { activBtn: 'flowerSystemSecond', activ: flowerSystemSecond },
  //   { activBtn: 'flowerSystemThird', activ: flowerSystemThird },
  //   { activBtn: 'flowerSystemFourth', activ: flowerSystemFourth },
  //   { activBtn: 'rightsFlowerSystem', activ: rightsFlowerSystem },
  //   { activBtn: 'rightsFlowerSystemSecond', activ: rightsFlowerSystemSecond },
  //   { activBtn: 'rightsFlowerSystemThird', activ: rightsFlowerSystemThird },
  //   { activBtn: 'rightsFlowerSystemFourth', activ: rightsFlowerSystemFourth },
  // ];

  // let activPallete = '';
  // let rightsActivPallete = '';
  useEffect(() => {
    if (inputOne !== '' && activMenu === 'flowerSystem') {
      if (flowerSystem === 'RGB' && rightsFlowerSystem === 'RGB') {
        try {
          setInputTwo(inputOne);
        } catch (error) {
          setInputTwo('');
        }
        return;
      }
      if (flowerSystem === 'RGB' && rightsFlowerSystem === 'RGBA') {
        try {
          const colorEl = inputOne.split(',');
          const convertedColor = Converter.RGBToRGBA(
            colorEl[0],
            colorEl[1],
            colorEl[2]
          );
          setInputTwo(
            Object.values({ convertedColor }).map(i => Object.values(i))
          );
        } catch (error) {
          setInputTwo('');
        }
        return;
      }
      if (flowerSystem === 'RGB' && rightsFlowerSystem === 'HEX') {
        try {
          const colorEl = inputOne.split(',');
          const convertedColor = Converter.RGBToHEX(
            Number(colorEl[0]),
            Number(colorEl[1]),
            Number(colorEl[2])
          );
          setInputTwo(convertedColor);
        } catch (error) {
          setInputTwo('');
        }
        return;
      }
      if (flowerSystem === 'RGB' && rightsFlowerSystem === 'CMYK') {
        try {
          const colorEl = inputOne.split(',');
          const convertedColor = Converter.RGBToCMYK(
            colorEl[0],
            colorEl[1],
            colorEl[2]
          );
          setInputTwo(
            Object.values({ convertedColor }).map(i => Object.values(i))
          );
        } catch (error) {
          setInputTwo('');
        }
        return;
      }
      if (flowerSystem === 'RGB' && rightsFlowerSystem === 'Name') {
        try {
          const colorEl = inputOne.split(',');
          const convertedColor = Converter.RGBToName(
            Number(colorEl[0]),
            Number(colorEl[1]),
            Number(colorEl[2])
          );
          setInputTwo(convertedColor);
        } catch (error) {
          setInputTwo('');
        }
        return;
      }
    }
    setInputTwo('');
    console.log('что то не так');
  }, [inputOne, activMenu, flowerSystem, rightsFlowerSystem]);

  // function convert() {
  //   activList.map(activ => {
  //     if (activ.activBtn === activMenu) {
  //       activPallete = activ.activ;
  //     }
  //     if (activ.activBtn === rightsActivMenu) {
  //       rightsActivPallete = activ.activ;
  //     }
  //     return [activPallete, rightsActivPallete];
  //   });
  // }
  // convert();

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
          <InputColor
            type="text"
            name="input1"
            value={inputOne}
            onChange={event => setInputOne(event.target.value)}
          />
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
          <InputColor type="text" name="input2" defaultValue={inputTwo} />
        </WrraperInput>
      </WrraperRightsBtnGroup>
    </WrraperOnverter>
  );
};

export default ConverterColor;
