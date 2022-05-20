import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
} from "../schema";
import { Product } from "@common/types/product";
const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};
// ProductOption is the type of product params that we get from the Shopify schema
const normalizeProductOption = ({
  id,
  values,
  name: displayName,
}: ProductOption) => {
  const normalized = {
    id,
    displayName,
    values: values.map((value) => {
      let output: any = { label: value };
      // meams display name should match color colour // and gi means it can match Coulur Color
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        };
      }
      return output;
    }),
  };
  return normalized;
};

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    priceRange,
    options,
    images: imageConnection,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((o) => normalizeProductOption(o))
      : [],
    ...rest,
  };
  return product;
}
