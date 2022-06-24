const handleFilterCategory = (categoryValue, array) => {
  if (categoryValue === "all") {
    return array;
  }
  return array.filter((product) => product.category === categoryValue);
};

export const handleFilterPrice = (categoryValue, priceValue, array) => {
  console.log("value")
  const result = handleFilterCategory(categoryValue, array);
  if (priceValue === "lowest-price") {
    return result.sort((a, b) => a.cost - b.cost);
  } else if (priceValue === "highest-price") {
    return result.sort((a, b) => b.cost - a.cost);
  }
  return result;
};
