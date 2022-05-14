import { ApiConfig } from "@common/types/api";
import { getProductQuery } from "@framework/utils";

const getProduct = async (config: ApiConfig): Promise<any> => {
  const { data } = await config.fetch<any>({
    query: getProductQuery,
    url: config.apiUrl,
  });
  console.log(data);
  return {
    product: {
      name: "MY super product",
      slug: "my-super-product",
    },
  };
};

export default getProduct;
