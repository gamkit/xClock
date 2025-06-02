import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectTimerStatus } from "@/features/timer/model/selector";
import { useAppSelector, useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar/model/slice";
import { selectStopwatchStatus } from "@/features/stopwatch/model/selector";
import { GET_TIME_FORMAT, TIME_FORMAT_24H } from "@/shared/const/storage";

export const useAppFrameState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timerStatus = useAppSelector(selectTimerStatus);
  const stopwatchStatus = useAppSelector(selectStopwatchStatus);
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

  useEffect(() => {
    const currentTimeFormat = localStorage.getItem(GET_TIME_FORMAT);
    if (!currentTimeFormat) {
      localStorage.setItem(GET_TIME_FORMAT, TIME_FORMAT_24H);
    }
  }, []);

  return {
    isMenuOpen,
    burgerClickHandler,
    menuItemClickHandler,
    location,
    timerStatus,
    stopwatchStatus,
  };
};
