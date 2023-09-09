import style from "./style.module.scss";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { fetcher } from "../../Helpers/fetcher";
import { Advice, Data } from "../../Types";
import { ReactComponent as Design } from "../../assets/img/Design.svg";

const Container = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const data: Data = await fetcher("https://api.adviceslip.com/advice");
      setAdvice(data.slip);
      setIsLoading(false);
    } catch (error) {
      setError("Something goes wrong!");
      setAdvice(null);
    }
  };

  const updateAdvice = async () => {
    getData();
  };

  return (
    <div className={style.container}>
      {isLoading ? (
        <p className={style.advice}> Not so fast, please</p>
      ) : (
        <div className={style.card}>
          <h3>ADVICE #{advice?.id}</h3>
          <p className={style.advice}>"{advice?.advice}"</p>

          <div className={style.design}>
            <div className={style.left}> </div>
            <div className={style.group}>
              <Design />
            </div>
            <div className={style.right}></div>
          </div>
        </div>
      )}

      <Button updateAdvice={updateAdvice} />
    </div>
  );
};

export default Container;
