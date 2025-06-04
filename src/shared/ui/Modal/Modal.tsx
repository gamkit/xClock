import { ReactNode, SyntheticEvent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { Button } from "../buttons/Button";
import { Cross } from "../icons/main";
import styles from "./Modal.module.scss";
import { motion } from "motion/react";
import { modalWindowVariants } from "./lib/constants";

interface IModalProps {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  isOverlayClickBlocked?: boolean;
  title: string;
  onClose: () => void;
  className?: string;
}

export const Modal = ({
  children,
  title,
  isOpen,
  isOverlayClickBlocked,
  onClose,
  className,
}: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const overlayClickHandler = (e: SyntheticEvent) => {
    if (!isOverlayClickBlocked) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-id=modal]")) {
        return;
      }
      onClose();
    }
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const modalContent = (
    <div
      ref={modalRef}
      className={classNames(className, styles["modal__overlay"])}
      onClick={overlayClickHandler}
      onKeyDown={keyDownHandler}
      tabIndex={-1}
    >
      <motion.div
        className={styles["modal__window"]}
        data-id="modal"
        {...modalWindowVariants}
      >
        <h2 className={styles["modal__title"]}>{title}</h2>
        {children}
        <Button
          className={styles["modal__close-btn"]}
          Icon={<Cross size={48} />}
          bType="ghost"
          size="sm"
          onClick={onClose}
        />
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.querySelector(".modals-portal")!);
};

Modal.Body = ({
  children,
  className,
}: Pick<IModalProps, "children" | "className">) => {
  return (
    <div className={classNames(className, styles["modal__body"])}>
      {children}
    </div>
  );
};
