import { FC, useState } from "react";
import cn from "classnames";
import s from "./ProductView.module.css";
import { Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import ProductSlider from "../ProductSlider/ProductSlider";
import Button from "../../ui/Button/Button";
import Swatch from "../Swatch";
import { Choices, getVariant } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";

interface Props {
  product: Product;
}

// Type of choces will be : Key could be anything from "color" |  "size" | string
const ProductView: FC<Props> = ({ product }) => {
  const [choices, SetChoices] = useState<Choices>({});
  const { openSidebar } = useUI();
  const addItem = useAddItem();
  const variant = getVariant(product, choices);
  const addToCart = () => {
    try {
      const item = {
        productId: String(product.id), // this will always return product id as string even if its a number
        variantId: variant?.id,
        variantOption: variant?.options,
      };
      const result = addItem(item);
      alert(JSON.stringify(result));
      console.log(result);
      openSidebar();
    } catch {}
  };
  return (
    <Container>
      <div className={cn(s.root, "fit", "mb-5")}>
        <div className={cn(s.productDisplay, "fit")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image, i) => (
              <div key={i} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div key={option.id} className='pb-4'>
                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                <div className='flex flex-row py-4'>
                  {option.values.map((optValue) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];

                    return (
                      <Swatch
                        key={`${product.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        active={optValue.label.toLowerCase() === activeChoice}
                        onClick={() =>
                          SetChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]: optValue.label,
                          })
                        }
                      ></Swatch>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button className='s.button' onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
