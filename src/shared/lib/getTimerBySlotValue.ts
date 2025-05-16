export const getTimerBySlotValue = (value: string) => {
  // 00:10:00
  if (value) {
    let [min, sec, ms] = value.split(":").map((val) => Number(val));

    min = min > 0 ? min * 60000 : 0;
    sec = sec > 0 ? sec * 1000 : 0;
    ms = ms > 0 ? ms * 1000 * 10 : 0;

    const result = min + sec + ms;

    return result;
  }
  return 0
};
