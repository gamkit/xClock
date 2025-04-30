import { Modal, Slot } from "@/shared/ui";
import { TimerLayout } from "./ui/TimerLayout";
import { Controls } from "./ui/Controls";
import { Digits } from "./ui/Digits";
import { Slots } from "./ui/Slots";
import { ModalSlotCreate } from "./ui/ModalContent/ModalSlotCreate";
import { ModalSlotEdit } from "./ui/ModalContent/ModalSlotEdit";
import { ModalSlotDelete } from "./ui/ModalContent/ModalSlotDelete";
import { TTimerSlotItem } from "./model/types";
import { useTimerState } from "./lib/useTimerState";

export const Timer = () => {
  const {
    min,
    ms,
    sec,
    timerStatus,
    handleStart,
    handlePause,
    handleStop,

    timerSlotsData,
    modalState,
    slotState,

    handleOpenModalByAction,
    handleCloseModal,
    handleSelectSlotHandler,

    handleCreateConfirm,
    handleEditConfirm,
    handleDeleteConfirm,
  } = useTimerState();

  const renderModalContentByAction = (action: string, slot?: TTimerSlotItem) =>
    ({
      create: (
        <ModalSlotCreate
          onCreate={handleCreateConfirm}
          onCancel={handleCloseModal}
        />
      ),
      edit: slot && (
        <ModalSlotEdit
          slot={slot}
          onEdit={handleEditConfirm}
          onCancel={handleCloseModal}
        />
      ),
      delete: slot && (
        <ModalSlotDelete
          slot={slot}
          onCancel={handleCloseModal}
          onConfirm={() => handleDeleteConfirm(slot.id)}
        />
      ),
    }[action]);

  return (
    <>
      <TimerLayout
        digits={<Digits min={min} sec={sec} ms={ms} />}
        controls={
          <Controls
            timerStatus={timerStatus}
            onPlay={handleStart}
            onPause={handlePause}
            onStop={handleStop}
          />
        }
        slots={
          <Slots
            onCreate={() => handleOpenModalByAction("create")}
            timerStatus={timerStatus}
          >
            {timerSlotsData.length ? (
              timerSlotsData.map((slot) => (
                <Slot
                  key={slot.id}
                  id={slot.id}
                  title={slot.title}
                  value={slot.value}
                  isActive={slotState.selectedSlotId === slot.id}
                  onClick={() => handleSelectSlotHandler(slot.id, slot.value)}
                  onDelete={() => handleOpenModalByAction("delete", slot.id)}
                  onEdit={() => handleOpenModalByAction("edit", slot.id)}
                />
              ))
            ) : (
              <p>Нет доступных слотов</p>
            )}
          </Slots>
        }
      />
      <Modal
        isOpen={modalState.isOpen}
        isOverlayClickBlocked
        title={modalState.title}
        onClose={handleCloseModal}
      >
        <Modal.Body>
          {renderModalContentByAction(modalState.action, slotState.slotData)}
        </Modal.Body>
      </Modal>
    </>
  );
};
