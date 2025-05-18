import { useAppSelector } from "@/shared/lib";
import {
  selectIsProcessing,
  selectPrimaryStatus,
  selectSecondaryStatus,
} from "../model/selectors";

export const useStatusBarState = () => {
  const primaryStatus = useAppSelector(selectPrimaryStatus);
  const secondaryStatus = useAppSelector(selectSecondaryStatus);
  const isProcessing = useAppSelector(selectIsProcessing);

  return { primaryStatus, secondaryStatus, isProcessing };
};
