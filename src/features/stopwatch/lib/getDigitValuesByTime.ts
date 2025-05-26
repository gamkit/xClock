import { padToTwoDigits } from "@/shared/lib";

export const getDigitValuesByTime = (time: number) => {
  const min = padToTwoDigits(Math.floor(time / (1000 * 60)));
  const sec = padToTwoDigits(Math.floor(time / 1000) % 60);
  const ms = padToTwoDigits(Math.floor((time % 1000) / 10));

  return { min, sec, ms };
};
