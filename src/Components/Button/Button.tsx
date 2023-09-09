import style from "./style.module.scss";
import { ReactComponent as ChangeButton } from "../../assets/img/Button.svg";

const Button = ({ updateAdvice }) => {
  return (
    <button className={style.click}>
      <ChangeButton onClick={updateAdvice} />
    </button>
  );
};

export default Button;
