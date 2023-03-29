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

const ColorReference = () => {
  const [activBTN, setActivBTN] = useState('RGB');

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
              backgroundColor={activBTN === 'RGB' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'RGB' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('RGB');
              }}
            >
              RGB
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'RGBA' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'RGBA' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('RGBA');
              }}
            >
              RGBA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HEX' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HEX' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HEX');
              }}
            >
              HEX
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'CMYK' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'CMYK' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('CMYK');
              }}
            >
              CMYK
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'Name' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'RGBA' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('Name');
              }}
            >
              Name
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HSL' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HSL' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HSL');
              }}
            >
              HSL
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HSLA' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HSLA' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HSLA');
              }}
            >
              HSLA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HSIA' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HSIA' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HSIA');
              }}
            >
              HSIA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HLSA' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HLSA' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HLSA');
              }}
            >
              HLSA
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HSI' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HSI' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HSI');
              }}
            >
              HSI
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HLS' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HLS' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HLS');
              }}
            >
              HLS
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HSV' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HSV' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HSV');
              }}
            >
              HSV
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HSB' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HSB' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('HSB');
              }}
            >
              HSB
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'Safe' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'Safe' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('Safe');
              }}
            >
              Safe
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'CMY' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'CMY' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('CMY');
              }}
            >
              CMY
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'XYZ' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'XYZ' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('XYZ');
              }}
            >
              XYZ
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'Yxy' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'Yxy' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('Yxy');
              }}
            >
              Yxy
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'Lab' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'Lab' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('Lab');
              }}
            >
              Lab
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'LCH' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'LCH' ? '#333333' : '#FFFFFF'}
              onClick={() => {
                setActivBTN('LCH');
              }}
            >
              LCH
            </Button>
          </ItemBtn>
          <ItemBtn>
            <Button
              backgroundColor={activBTN === 'HunterLab' ? '#D9D9D9' : '#3F3F40'}
              color={activBTN === 'HunterLab' ? '#333333' : '#FFFFFF'}
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
