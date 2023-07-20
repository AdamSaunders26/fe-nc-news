export function convertDate(date) {
  if (date) {
    const splitDate = [date.slice(0, 4), date.slice(5, 7), date.slice(8, 10)];
    return splitDate.reverse().join("-");
  }
}

export function capitaliseString(string) {
  return string ? string.slice(0, 1).toUpperCase() + string.slice(1) : null;
}

