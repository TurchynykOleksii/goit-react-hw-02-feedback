import css from './Button.module.css';

export const Button = ({ title, handleState }) => {
  return (
    <button className={css.button} onClick={handleState}>
      {title}
    </button>
  );
};
