import { ReactNode } from "react";
import style from "./Frame.module.scss";

interface IFrameProps {
  children: string | ReactNode;
  backgroundColor?: string;
}

export const Frame = ({ children, backgroundColor }: IFrameProps) => {
  return (
    <div className={style["frame-container"]} style={{ backgroundColor }}>
      {children}
    </div>
  );
};
