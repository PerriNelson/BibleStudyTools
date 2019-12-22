import { handleError, handleResponse } from "./apiUtils";
const baseUrl = process.env.API_URL + "/chapters/";
export async function getChapters() {
  try {
    let response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}
