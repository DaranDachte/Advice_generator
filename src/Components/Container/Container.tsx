import style from "./style.module.scss";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { fetcher } from "../../Helpers/fetcher";
import { Advice } from "../../Types";

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
      const data = await fetcher("https://api.adviceslip.com/advice");
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
        <p> Waiting for a Loading...</p>
      ) : (
        <div className={style.card}>
          <h3>ADVICE #{advice?.id}</h3>
          <p>{advice?.advice}</p>
        </div>
      )}
      <Button updateAdvice={updateAdvice} />
    </div>
  );
};

export default Container;
