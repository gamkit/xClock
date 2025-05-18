import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectTimerStatus } from "@/features/timer/model/selector";
import { useAppSelector, useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar/model/slice";

export const useBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timerStatus = useAppSelector(selectTimerStatus);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const burgerClickHandler = () => {
    dispatch(statusBarActions.setPrimaryStatus("menu"));
    setIsMenuOpen((prev) => !prev);
  };

  const menuItemClickHandler = (to: string) => {
    navigate(to);
    setIsMenuOpen((prev) => !prev);
  };

  return {
    isMenuOpen,
    burgerClickHandler,
    menuItemClickHandler,
    location,
    timerStatus,
  };
};
