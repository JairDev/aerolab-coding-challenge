function handleFilterCategory(categoryValue, array) {
  if (categoryValue === "all") {
    return array;
  }
  return array.filter((product) => product.category === categoryValue);
}

export function handleSortBy(categoryValue, valueToSort = "", array = []) {
  const result = handleFilterCategory(categoryValue, array);

  if (valueToSort === "lowest-price") {
    return result.sort((a, b) => a.cost - b.cost);
  } else if (valueToSort === "highest-price") {
    return result.sort((a, b) => b.cost - a.cost);
  } else if (valueToSort === "recent") {
    result.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  }
  return result;
}
