import { Button, TextField } from "@/shared/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { padToTwoDigits } from "@/shared/lib";
import styles from "./ModalContent.module.scss";

type TFormData = {
  title: string;
  min: string;
  sec: string;
  mills: string;
};

interface IModalSlotCreateProps {
  onCreate: (title: string, value: string) => void;
  onCancel: () => void;
}

export const ModalSlotCreate = ({
  onCreate,
  onCancel,
}: IModalSlotCreateProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm<TFormData>({});

  const createSlot: SubmitHandler<TFormData> = ({ title, min, sec, mills }) => {
    onCreate(title, [min, sec, mills].map((e) => padToTwoDigits(+e)).join(":"));
  };

  return (
    <div className={styles["fields-wrapper"]}>
      <form onSubmit={handleSubmit(createSlot)}>
        <TextField
          label="Название таймера"
          isFullWidth
          errorMessage={errors.title?.message}
          {...register("title", { required: true })}
        />
        <div className={styles["digit-fields"]}>
          <TextField
            label="Мин"
            type="number"
            defaultValue={"00"}
            min="0"
            max="99"
            {...register("min", { required: true })}
          />
          <span className={styles["delimiter"]}></span>
          <TextField
            label="Сек"
            type="number"
            defaultValue={"00"}
            min="0"
            max="59"
            {...register("sec", { required: true })}
          />
          <span className={styles["delimiter"]}></span>
          <TextField
            label="Милл"
            type="number"
            defaultValue={"00"}
            min="0"
            max="59"
            {...register("mills", { required: true })}
          />
        </div>
        <div className={styles["btns-container"]}>
          <Button
            className={styles["btn-confirm"]}
            disabled={!isDirty || !isValid}
          >
            Готово
          </Button>
          <Button className={styles["btn-cancel"]} onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
