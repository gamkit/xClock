import { StatusHeading } from "@/shared/ui";
import { StatusBarLayout } from "./ui/StatusBarLayout";
import { EStatusLabels } from "./lib/constants";
import { useStatusBarState } from "./lib/useStatusBarState";

export const StatusBar = () => {
  const { primaryStatus, secondaryStatus, isProcessing } = useStatusBarState();

  return (
    <StatusBarLayout
      secondaryTextBar={
        <StatusHeading size="sm">
          {isProcessing ? EStatusLabels[secondaryStatus] : null}
        </StatusHeading>
      }
      primaryTextBar={
        <StatusHeading
          status={
            isProcessing ? "processing" : "active"
          }
        >
          {EStatusLabels[primaryStatus]}
        </StatusHeading>
      }
    />
  );
};
