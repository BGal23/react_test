import css from "../css/style.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ selected, children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={clsx(css.btn, { [css.isSelected]: selected })}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.string,
};
