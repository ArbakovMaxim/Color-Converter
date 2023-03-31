import { Navigation } from 'components/Navigation/Navigation';
import {
  BtnDay,
  BtnNight,
  Day,
  HeaderTeg,
  Img,
  WraperHeader,
  WrapperLogo,
} from './Header.styled';
import useTheme from '../../style/useTheme';
import { Moon } from 'images/Moon';
import { Sun } from 'images/Sun';
import { useState } from 'react';
import logo from 'images/logo.jpg';
import logoNight from 'images/logoNight.png';

const Header = () => {
  const [thema, setThema] = useState(true);

  const { isDarkTheme, isLightTheme } = useTheme();

  const colorThemaDay =
    'linear-gradient(to bottom, #F5F5F5 0%, #F5F5F5 60%, #333333 70%, #333333 100%);';
  const colorThemaNight =
    'linear-gradient(to bottom, #F5F5F5 0%, #F5F5F5 30%, #333333 40%, #333333 100%);';
  return (
    <HeaderTeg>
      <WraperHeader>
        <WrapperLogo>
          <Img src={thema ? logo : logoNight} alt="logo"></Img>
        </WrapperLogo>
        <Navigation />
        <Day color={thema ? colorThemaDay : colorThemaNight}>
          <BtnDay
            onClick={() => {
              setThema(true);
              isLightTheme();
            }}
          >
            <Sun />
          </BtnDay>
          <BtnNight
            onClick={() => {
              setThema(false);
              isDarkTheme();
            }}
          >
            <Moon />
          </BtnNight>
        </Day>
      </WraperHeader>
    </HeaderTeg>
  );
};

export default Header;
