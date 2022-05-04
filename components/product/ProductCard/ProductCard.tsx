import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}
const placeholderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a href=''>
        {" "}
        <div>
          <h3>{product.name}</h3>
          <span>$14</span>
        </div>
        {product.images && (
          <Image
            alt={product.name ?? "Product Image"}
            src={product.images[0].url}
            height={540}
            width={540}
            quality='85'
            layout='responsive'
          />
        )}
      </a>
    </Link>
  );
};
export default ProductCard;
