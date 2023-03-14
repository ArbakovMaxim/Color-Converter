import Header from 'components/header/Header';
import { Wraper } from './Home.styled';
import Main from 'components/main/Main';

const Home = () => {
  return (
    <Wraper>
      <Header />
      <Main />
    </Wraper>
  );
};

export default Home;
