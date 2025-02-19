import { ReactNode } from "react";
import style from "./CardContainer.module.scss";

interface ICardContainerProps {
  children: string | ReactNode;
}

export const CardContainer = ({ children }: ICardContainerProps) => {
  return <div className={style.container}>{children}</div>;
};
