import ColorPicker from 'components/colorPicker/colorPicker';
import { MainTeg } from './Main.styled';
import TextDescription from 'components/DescriptionText/DescriptionText';

const Main = () => {
  return (
    <MainTeg>
      <TextDescription />
      <ColorPicker />
    </MainTeg>
  );
};

export default Main;
