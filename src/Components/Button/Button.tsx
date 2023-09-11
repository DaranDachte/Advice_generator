import style from "./style.module.scss";
import { ReactComponent as ChangeButton } from "../../assets/img/Button.svg";

const Button = ({ updateAdvice }) => {
  return (
    <div className={style.click}>
      <ChangeButton onClick={updateAdvice} />
    </div>
  );
};

export default Button;
