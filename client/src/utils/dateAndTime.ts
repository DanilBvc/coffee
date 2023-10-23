export const getDateFrom = (date: Date) => {
  const inputDate = new Date(date);
  inputDate.setDate(inputDate.getDate() + 7);

  const day = inputDate.getDate().toString().padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[inputDate.getMonth()];
  const year = inputDate.getFullYear();

  return `${day} ${month} ${year}`;
}
