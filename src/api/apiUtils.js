export function handleResponse(response) {
  if (response.status === 200) return response.data;
  else if (response.status === 400) {
    const error = response.statusText();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
