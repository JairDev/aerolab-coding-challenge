export async function dataService(url, headers) {
  try {
    const response = await fetch(url, headers);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error", error);
  }
}
