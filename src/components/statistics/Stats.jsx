import css from './Statistics.module.css';

export const Items = ({ id, label, percentage }) => {
  return (
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
