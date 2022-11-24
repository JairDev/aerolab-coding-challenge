const handleFilterCategory = (categoryValue, array) => {
  if (categoryValue === "all") {
    return array;
  }
  return array.filter((product) => product.category === categoryValue);
};

export const handleSortBy = (categoryValue, priceValue, array = []) => {
  const result = handleFilterCategory(categoryValue, array);

  if (priceValue === "lowest-price") {
    return result.sort((a, b) => a.cost - b.cost);
  } else if (priceValue === "highest-price") {
    return result.sort((a, b) => b.cost - a.cost);
  } else if (priceValue === "recent") {
    console.log(priceValue);
    result.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  }
  return result;
};
