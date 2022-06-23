export function createHeader(method, bodyObj) {
  const header = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFiNjBjOTUyMzQwMzAwMjE2YmQxYjciLCJpYXQiOjE2NTUzOTg2MDF9.Ad7f8yRQZITY5YNmg9JRyvXg8-Ogi252mOm_4XVykac`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(bodyObj),
  };
  return header;
}