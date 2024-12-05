// -_-
import axios from "axios";

export const fetchData = async (endpoint) => {
  // Building the url
  const url = `${process.env.BASE_URL}/${endpoint}`;
  //   Checking so the right path is used
  // console.log(`Fetching Data from ${url}`);

  try {
    const response = await axios.get(url);
    // console.log("Data fetched successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Request failed: ${endpoint} - ${response.statusText}`);
    }

    return response.data;
    // // Using axios to fetch from url
    // const response = await axios.get(url);
    // //Checking the response
    // console.log(response);
    // if (!response.ok) {
    //   throw new Error(`Request failed: ${endpoint} - ${response.statusText}`);
    // }

    // // returnerna resultatet
    // const res = await response.json();
    // return res;
  } catch (error) {
    console.error(`Error in fetchData: ${error.message}`);
    throw new Error(`Error in fetchData: ${error.message}`);
  }
};
