import { theme } from "./theme";

export const size = (multiplier = 1) => {
  const baseUnit = parseFloat(theme.size.baseUnit);
  return `${multiplier * baseUnit}px`;
};
