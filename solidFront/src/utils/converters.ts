export const parseOrZero = (val: string | number) => {
  if (typeof val === "number") {
    return val
  } 

  let parsed = parseInt(val, 10)
  return isNaN(parsed) ? 0 : parsed

}
