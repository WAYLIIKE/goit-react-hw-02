import css from './Options.module.css';

export const Options = ({
  onGoodChange,
  onNeutralChange,
  onBadChange,
  onReset,
  total,
}) => {
  return (
    <div className={css.container}>
      <button className={css.good} onClick={onGoodChange}>
        Good
      </button>
      <button className={css.neutral} onClick={onNeutralChange}>
        Neutral
      </button>
      <button className={css.bad} onClick={onBadChange}>
        Bad
      </button>
      {total > 0 && (
        <button onClick={onReset} className={css.reset}>
          Reset
        </button>
      )}
    </div>
  );
};
