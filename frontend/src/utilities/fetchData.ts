// -_-
import axios from "axios";

interface FetchDataProps {
  endpoint: string;
  id?: number;
}

export const fetchData = async ({ endpoint, id }: FetchDataProps) => {
  const baseUrl = "http://localhost:8008"; // Your backend URL

  const url =
    id !== undefined
      ? `${baseUrl}/${endpoint}/${id}`
      : `${baseUrl}/${endpoint}`;

  //   console.log("Fetching from: ", url);

  try {
    const response = await axios.get(url);
    // console.log("Response data:", response.data.data);
    console.log(response);
    return Array.isArray(response.data.data)
      ? response.data.data
      : [response.data.data];
  } catch (error) {
    // console.error("Error fetching data: ", error);
    throw new Error(`Failed to fetch data: ${error}`);
  }
};
