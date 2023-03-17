import PropTypes from 'prop-types';
import { Items } from './Stats';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <Items key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
