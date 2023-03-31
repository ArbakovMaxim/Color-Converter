import { useState } from 'react';
import {
  Button,
  ItemBtn,
  ListBtn,
  TextColorModel,
  TitlColorModel,
  WrapperButtonGroup,
  WrapperReference,
  WrapperTitleColorModel,
} from './ColorReference.styled';
import { activColorModel } from 'util/ActivElement/activColorModel';
import useTheme from '../../style/useTheme';

const ColorReference = () => {
  const [activBTN, setActivBTN] = useState('RGB');
  const { theme } = useTheme();
  const ActiveModel = activColorModel(activBTN);

  return (
    <WrapperReference>
      <WrapperTitleColorModel>
        <TitlColorModel>СПРАВКА ПО ЦВЕТОВЫМ МОДЕЛЯМ</TitlColorModel>
        <TextColorModel>
          Далее приводится краткое описание цветовых систем с которыми работает
          конвертер, разъяснение по форматам, а также примеры использования
          полученных цветов в CSS/HTML.
        </TextColorModel>
      </WrapperTitleColorModel>
      <WrapperButtonGroup>
        <ListBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'RGB' ? theme.btnActive : theme.btn}
              color={activBTN === 'RGB' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'RGB' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('RGB');
              }}
            >
              RGB
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'RGBA' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'RGBA' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'RGBA' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('RGBA');
              }}
            >
              RGBA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'HEX' ? theme.btnActive : theme.btn}
              color={activBTN === 'HEX' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'HEX' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HEX');
              }}
            >
              HEX
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'CMYK' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'CMYK' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'CMYK' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('CMYK');
              }}
            >
              CMYK
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'Name' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'Name' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'Name' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('Name');
              }}
            >
              Name
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'HSL' ? theme.btnActive : theme.btn}
              color={activBTN === 'HSL' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'HSL' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HSL');
              }}
            >
              HSL
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'HSLA' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'HSLA' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'HSLA' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HSLA');
              }}
            >
              HSLA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'HSIA' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'HSIA' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'HSIA' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HSIA');
              }}
            >
              HSIA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'HLSA' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'HLSA' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'HLSA' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HLSA');
              }}
            >
              HLSA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'HSI' ? theme.btnActive : theme.btn}
              color={activBTN === 'HSI' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'HSI' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HSI');
              }}
            >
              HSI
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'HLS' ? theme.btnActive : theme.btn}
              color={activBTN === 'HLS' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'HLS' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HLS');
              }}
            >
              HLS
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'HSV' ? theme.btnActive : theme.btn}
              color={activBTN === 'HSV' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'HSV' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HSV');
              }}
            >
              HSV
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'HSB' ? theme.btnActive : theme.btn}
              color={activBTN === 'HSB' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'HSB' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HSB');
              }}
            >
              HSB
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'Safe' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'Safe' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'Safe' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('Safe');
              }}
            >
              Safe
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'CMY' ? theme.btnActive : theme.btn}
              color={activBTN === 'CMY' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'CMY' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('CMY');
              }}
            >
              CMY
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'XYZ' ? theme.btnActive : theme.btn}
              color={activBTN === 'XYZ' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'XYZ' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('XYZ');
              }}
            >
              XYZ
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'Yxy' ? theme.btnActive : theme.btn}
              color={activBTN === 'Yxy' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'Yxy' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('Yxy');
              }}
            >
              Yxy
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'Lab' ? theme.btnActive : theme.btn}
              color={activBTN === 'Lab' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'Lab' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('Lab');
              }}
            >
              Lab
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={activBTN === 'LCH' ? theme.btnActive : theme.btn}
              color={activBTN === 'LCH' ? theme.btnTextActive : theme.basicText}
              border={activBTN === 'LCH' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('LCH');
              }}
            >
              LCH
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              theme={theme}
              backgroundColor={
                activBTN === 'HunterLab' ? theme.btnActive : theme.btn
              }
              color={
                activBTN === 'HunterLab' ? theme.btnTextActive : theme.basicText
              }
              border={activBTN === 'HunterLab' ? 'transparent' : theme.border}
              onClick={() => {
                setActivBTN('HunterLab');
              }}
            >
              HunterLab
            </Button>
          </ItemBtn>
        </ListBtn>
      </WrapperButtonGroup>
      <ActiveModel />
    </WrapperReference>
  );
};

export default ColorReference;
