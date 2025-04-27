import { useCurrentTime } from "./lib/useCurrentTime";
import { CurrentTimeLayout } from "./ui/CurrentTimeLayout";
import { Digits } from "./ui/Digits";
import { Date } from "./ui/Date";

export const CurrentTime = () => {
  const { hours, minutes, dayOfWeek, date } = useCurrentTime();

  return (
    <CurrentTimeLayout
      digits={<Digits hours={hours} minutes={minutes} />}
      date={<Date date={date} dayOfWeek={dayOfWeek} />}
    />
  );
};
