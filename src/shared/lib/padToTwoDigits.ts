export const padToTwoDigits = (num: number) => {
  return Math.abs(num).toString().padStart(2, "0");
};
