import PropTypes from 'prop-types';
import { StatisticItem } from 'components';

import { StatisticsList, StatisticTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map((i, index) => {
          return (
            <StatisticItem
              key={i.id}
              text={i.title}
              counter={i.total}
              idx={index}
            >
              <i.Icon />
            </StatisticItem>
          );
        })}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      Icon: PropTypes.func.isRequired,
    }),
  ),
};
