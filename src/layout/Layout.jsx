import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../style/GlobalStyle';
import { Container } from 'components/ui/Container.styled';
import Header from 'components/header/Header';

const Layout = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Header />
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
