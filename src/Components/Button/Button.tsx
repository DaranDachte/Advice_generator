import style from "./style.module.scss";
import ChangeButton from "../../assets/img/Button.svg";

interface ButtonProps {
  updateAdvice: () => void;
}
const Button: React.FC<ButtonProps> = ({ updateAdvice }) => {
  return (
    <div className={style.click}>
      <img src={ChangeButton} alt="ChangeButton" onClick={updateAdvice} />
    </div>
  );
};

export default Button;
