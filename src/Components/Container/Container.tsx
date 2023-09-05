import style from "./style.module.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { fetcher } from "../../Helpers/fetcher";
import { Advice } from "../../Types";

const Container = () => {
  const [advice, setAdvice] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const data = await fetcher("https://api.adviceslip.com/advice");
      const newData = Math.floor(Math.random() * data.length);
      console.log(newData);
      setAdvice(data);
      setIsLoading(false);
    } catch (error) {
      setError("Something goes wrong!");
      setAdvice({});
    }
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h3>ADVICE #{}</h3>
        <p>Advice bla bla bla</p>
      </div>
      <Button />
    </div>
  );
};

export default Container;
