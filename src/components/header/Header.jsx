import logo from '../../images/logoTransporent.png';
import { Day, Img, WraperHeader } from './Header.styled';

const Header = () => {
  return (
    <Header>
      <WraperHeader>
        <Img src={logo} alt="Page not found" />
        <Day />
      </WraperHeader>
    </Header>
  );
};

export default Header;
