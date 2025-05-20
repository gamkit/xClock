import { TimeDisplay } from "@/shared/ui";
import { useStopwatchState } from "./lib/useStopwatchState";
import { StopwatchLayout } from "./ui/StopwatchLayout";
import { Controls } from "./ui/Controls";
import { IntervalItem, Intervals } from "./ui/Intervals";

/* const intervals = [
  { id: "01", intervalTime: "00:00:00", totalTime: "00:00:00" },
  { id: "02", intervalTime: "00:03:22", totalTime: "00:00:00" },
  { id: "03", intervalTime: "00:05:16", totalTime: "00:00:00" },
  { id: "04", intervalTime: "00:10:11", totalTime: "00:00:00" },
]; */

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
                  intervalTime={item.intervalTime}
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
