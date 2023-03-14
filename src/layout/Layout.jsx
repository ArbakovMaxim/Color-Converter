import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../style/GlobalStyle';
import { Container } from 'components/ui/Container.styled';

const Layout = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
