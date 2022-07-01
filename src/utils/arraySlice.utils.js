export const arraySlice = (currentPage, itemsPerPage, array) => {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const newSliceArr = [...array].slice(start, end);
  return newSliceArr;
};
