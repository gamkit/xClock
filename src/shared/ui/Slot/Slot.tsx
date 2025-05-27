import classNames from "classnames";
import styles from "./Slot.module.scss";
import { SyntheticEvent } from "react";

interface ISlotProps {
  id: string | number;
  title: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const Slot = ({
  id,
  title,
  value,
  isActive = false,
  onClick,
  onEdit,
  onDelete,
}: ISlotProps) => {
  const handleEdit = (e: SyntheticEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDelete = (e: SyntheticEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      className={classNames(classNames, styles["slot"], {
        [styles["slot--active"]]: isActive,
      })}
      data-slot-id={id}
      onClick={onClick}
      title={title}
    >
      <p className={styles["slot-title"]}>{title}</p>
      <p className={styles["slot-value"]}>{value}</p>
      <div className={styles["slot-controls"]}>
        <button onClick={handleEdit} title="Изменить">
          ✏️
        </button>
        <button onClick={handleDelete} title="Удалить">
          ❌
        </button>
      </div>
    </div>
  );
};
