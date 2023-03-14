import logo from '../../images/logoTransporent.png';
import { Day, HeaderTeg, Img, WraperHeader } from './Header.styled';

const Header = () => {
  return (
    <HeaderTeg>
      <WraperHeader>
        <Img src={logo} alt="Page not found" />
        <Day />
      </WraperHeader>
    </HeaderTeg>
  );
};

export default Header;
