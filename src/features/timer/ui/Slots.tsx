import { ReactNode } from "react";
import { Button } from "@/shared/ui";
import { Add } from "@/shared/ui/icons/main";
import { TTimerStatus } from "../lib/useTimer";
import styles from "./Slots.module.scss";

interface ISlotsProps {
  onCreate: () => void;
  timerStatus: TTimerStatus;
  children: ReactNode | ReactNode[];
}

export const Slots = ({ children, onCreate, timerStatus }: ISlotsProps) => {
  return (
    <div className={styles["slots-container"]}>
      {timerStatus === "waiting" && (
        <>
          {children}
          <Button
            className={styles["slots__add-slot-btn"]}
            onClick={onCreate}
            rounded
            size="lg"
            Icon={<Add />}
          />
        </>
      )}
    </div>
  );
};
