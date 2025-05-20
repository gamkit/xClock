// Slot value 30:00:00 -> 1800000 (30 минут)
export const getTimerBySlotValue = (value: string) => {
  if (!value) return 0;

  const parts = value.split(":");
  if (parts.length !== 3) return 0;

  const min = Number(parts[0]) || 0;
  const sec = Number(parts[1]) || 0;
  const ms = Number(parts[2]) || 0;

  if ([min, sec, ms].some(val => val < 0)) return 0;

  return min * 60000 + sec * 1000 + ms;
};