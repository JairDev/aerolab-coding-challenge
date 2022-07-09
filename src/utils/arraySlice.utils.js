export const arraySlice = (currentPage, itemsPerPage, array) => {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  // console.log(start, end)
  const newSliceArr = [...array].slice(start, end);
  return newSliceArr;
};
