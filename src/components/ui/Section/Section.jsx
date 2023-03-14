import PropTypes from 'prop-types';
import { Sections } from './Section.styled';

export const Section = ({ title, children }) => {
  return <Sections>{children}</Sections>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
