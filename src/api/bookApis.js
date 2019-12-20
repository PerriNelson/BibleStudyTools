import { handleError, handleResponse } from "./apiUtils";
const baseUrl = process.env.API_URL + "/books/";

export async function getBooks() {
  try {
    let response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}
