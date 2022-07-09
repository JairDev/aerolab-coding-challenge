export function removeRepeatedElement(elementsArray) {
  if (elementsArray) {
    const filter = elementsArray.filter((item, index, array) => {
      const itemIndex = array.findIndex(
        (itemId) => itemId.productId === item.productId
      );
      return itemIndex === index;
    });

    return filter;
  }
}
