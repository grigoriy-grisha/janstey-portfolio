import classnames from "classnames";

import classes from "./Burger.module.css";

interface IProps {
  isActive: boolean;
  onClick: () => void;
}
function Burger({ isActive, onClick }: IProps) {
  return (
    <div
      className={classnames({ [classes.active]: isActive })}
      onClick={onClick}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={classnames(classes.line, classes.top)}
          d="M25 8.75L5 8.75"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className={classnames(classes.line, classes.middle)}
          d="M25 15L5 15"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className={classnames(classes.line, classes.bottom)}
          d="M25 21.25L5 21.25"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default Burger;
