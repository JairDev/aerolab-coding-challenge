export function countRepeatedElements(elementsArray) {
  if (elementsArray) {
    const count = elementsArray.reduce((acc, current) => {
      const { productId } = current;
      if (acc[productId]) {
        acc[productId] = acc[productId] + 1;
      } else {
        acc[productId] = 1;
      }

      return acc;
    }, {});
    return count;
  }
}
