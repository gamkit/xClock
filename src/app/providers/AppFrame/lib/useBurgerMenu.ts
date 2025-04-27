import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationActions } from "@/features/navigation";
import { useAppDispatch } from "@/shared/lib/redux/hooks";

export const useBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const burgerClickHandler = () => {
    dispatch(navigationActions.setScreen("menu"));
    setIsMenuOpen((prev) => !prev);
  };

  const menuItemClickHandler = (to: string, slug: string) => {
    navigate(to);
    dispatch(navigationActions.setScreen(slug));
    setIsMenuOpen((prev) => !prev);
  };

  return { isMenuOpen, burgerClickHandler, menuItemClickHandler, location };
};
