import { Button } from "@/shared/ui";
import { TTimerSlotItem } from "../../model/types";
import styles from "./ModalContent.module.scss";

interface IModalSlotDeleteProps {
  slot: TTimerSlotItem;
  onConfirm: () => void;
  onCancel: () => void;
}
export const ModalSlotDelete = ({
  slot,
  onConfirm,
  onCancel,
}: IModalSlotDeleteProps) => {
  return (
    <div>
      <p className={styles["slot-title"]}>
        {slot.title}: <span>{slot.value}</span>
      </p>
      <div className={styles["btns-container"]}>
        <Button className={styles["btn-confirm"]} onClick={onConfirm}>
          Да
        </Button>
        <Button className={styles["btn-cancel"]} onClick={onCancel}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
