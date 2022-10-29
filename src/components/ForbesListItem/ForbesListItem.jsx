import PropTypes from 'prop-types';

import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ name, avatar, capital, isIncrease }) => {
  console.log(name, avatar, capital, isIncrease);
  return (
    <ForbesItem>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </Capital>
    </ForbesItem>
  );
};

ForbesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  capital: PropTypes.number.isRequired,
  isIncrease: PropTypes.bool.isRequired,
};
