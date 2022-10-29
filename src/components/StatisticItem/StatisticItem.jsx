import PropTypes from 'prop-types';

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ text, counter, children }) => {
  return (
    <StatisticBox>
      {children}
      <StatisticText>{text}</StatisticText>
      <StatisticCounter>{counter}</StatisticCounter>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  text: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
