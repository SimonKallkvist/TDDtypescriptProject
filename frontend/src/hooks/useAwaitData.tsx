// -_-

import { useState } from "react";
import { fetchData } from "../utilities/fetchData"; // Assuming fetchData is properly set up to make the API call
import { IProduct } from "../Models/IProduct";

type AwaitDataParams = {
  fetchEndpoint: string;
  id?: number;
};

export const useAwaitData = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const awaitData = async ({ fetchEndpoint, id }: AwaitDataParams) => {
    try {
      console.log("awaitData is called with: ", fetchEndpoint, id);

      // Fetch the data from your backend (through fetchData)
      const fetchedProducts = await fetchData({ endpoint: fetchEndpoint, id });

      // Update the products state and set error to null
      setProducts(fetchedProducts);
      setShow(true);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch items:", error);
      setError((error as Error).message);
      setShow(false);
    }
  };

  return { products, show, error, awaitData };
};
