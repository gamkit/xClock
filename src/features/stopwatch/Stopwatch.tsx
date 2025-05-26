import { TimeDisplay } from "@/shared/ui";
import { useStopwatchState } from "./lib/useStopwatchState";
import { StopwatchLayout } from "./ui/StopwatchLayout";
import { Controls } from "./ui/Controls";
import { IntervalItem, Intervals } from "./ui/Intervals";

export const Stopwatch = () => {
  const {
    min,
    sec,
    ms,
    handleStart,
    handleStop,
    handleReset,
    handleAddInterval,
    intervals,
    stopwatchStatus,
  } = useStopwatchState();
  
  return (
    <>
      <StopwatchLayout
        digits={<TimeDisplay min={min} sec={sec} ms={ms} />}
        controls={
          <Controls
            stopwatchStatus={stopwatchStatus}
            onPlay={handleStart}
            onStop={handleStop}
            onReset={handleReset}
            onAddInterval={handleAddInterval}
          />
        }
        intervals={
          intervals.length ? (
            <Intervals>
              {intervals.map((item) => (
                <IntervalItem
                  key={item.id}
                  id={item.id}
                  lapTime={item.lapTime}
                  totalTime={item.totalTime}
                />
              ))}
            </Intervals>
          ) : null
        }
      />
    </>
  );
};
