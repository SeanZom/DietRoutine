export const calcTotal = (qty, unitage, size) => {
  return Math.round(size / qty * unitage);
}