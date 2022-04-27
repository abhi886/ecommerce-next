import { fetchApi, normalizeProduct, getAllProductsQuery } from "../utils";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import { ApiConfig } from "../../common/types/api";

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });
  // Normalize the data. Map over the edges on the products
  //and return node from them.
  const product =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];
  return product;
};

export default getAllProducts;
