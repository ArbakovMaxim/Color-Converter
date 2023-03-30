import { Navigation } from 'components/Navigation/Navigation';
import {
  BtnDay,
  BtnNight,
  Day,
  HeaderTeg,
  WraperHeader,
} from './Header.styled';
import { useTheme } from '../../style/theme';
import { Moon } from 'images/Moon';
import { Sun } from 'images/Sun';
import { useState } from 'react';
import { Logo } from 'images/Logo';

const Header = () => {
  const [thema, setThema] = useState(true);

  const { toggleTheme } = useTheme();

  const colorThemaDay =
    'linear-gradient(to bottom, #F5F5F5 0%, #F5F5F5 60%, #333333 70%, #333333 100%);';
  const colorThemaNight =
    'linear-gradient(to bottom, #F5F5F5 0%, #F5F5F5 30%, #333333 40%, #333333 100%);';
  return (
    <HeaderTeg>
      <WraperHeader>
        <Logo />
        <Navigation />
        <Day color={thema ? colorThemaNight : colorThemaDay}>
          <BtnDay
            onClick={() => {
              setThema(false);
              toggleTheme();
            }}
          >
            <Sun />
          </BtnDay>
          <BtnNight
            onClick={() => {
              setThema(true);
              toggleTheme();
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
