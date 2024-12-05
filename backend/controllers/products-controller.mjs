// -_-
// importera generisk fetch
import { fetchData } from "../utilities/httpClient.mjs";

// Hämta alla produkter
export const getAllProducts = async (req, res) => {
  // Förösk hämta från fetchData
  try {
    const result = await fetchData("products");

    console.log(result);

    res.status(200).json({
      success: true,
      message: "Started server and fetching data",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching data",
      error: error.message,
    });
  }
};

// Hämta enskild produkt
export const getProduct = async (req, res) => {
  const id = req.params.id;

  // Förösk hämta enskild produkt från fetchData
  try {
    const result = await fetchData(`products/${id}`);
    // Log to verify
    console.log(`Fetched product with id ${id}:`, result);

    res.status(200).json({
      success: true,
      message: "server fetching 1 item",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching data",
      error: error.message,
    });
  }
};
