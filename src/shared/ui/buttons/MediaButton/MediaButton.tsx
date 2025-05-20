import { ReactNode } from "react";
import classNames from "classnames";
import { TBaseButtonProps } from "../Button";
import { TMediaAction } from "./types";
import styles from "./MediaButton.module.scss";
import { Play, Pause, Stop, Interval } from "../../icons/media";
import { Cross } from "../../icons/main";

interface IMediaButtonProps extends TBaseButtonProps {
  action: TMediaAction;
  className?: string;
}

const mediaIconsMap: Record<TMediaAction, ReactNode> = {
  play: <Play size={42} />,
  pause: <Pause size={42} />,
  stop: <Stop size={42} />,
  interval: <Interval size={42} />,
  reset: <Cross size={42} />,
};

const mediaButtonTitleMap: Record<TMediaAction, string> = {
  play: "Запуск",
  pause: "Пауза",
  stop: "Стоп",
  interval: "Интервал",
  reset: "Сброс",
};

export const MediaButton = ({
  action,
  className,
  ...props
}: IMediaButtonProps) => {
  return (
    <button
      className={classNames(className, styles["media-button"], {
        [styles["media-button--play"]]: action === "play",
        [styles["media-button--pause"]]: action === "pause",
        [styles["media-button--stop"]]: action === "stop",
        [styles["media-button--interval"]]: action === "interval",
        [styles["media-button--reset"]]: action === "reset",
      })}
      title={mediaButtonTitleMap[action]}
      {...props}
    >
      {mediaIconsMap[action]}
    </button>
  );
};
