import { FC, useState } from "react";
import cn from "classnames";
import s from "./ProductView.module.css";
import { Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import ProductSlider from "../ProductSlider/ProductSlider";
import Button from "../../ui/Button/Button";
import Swatch from "../Swatch";

interface Props {
  product: Product;
}

type AvailableChoices = "color" | "size" | string;
type Choices = {
  [P in AvailableChoices]: string;
};
// Type of choces will be : Key could be anything from "color" |  "size" | string
const ProductView: FC<Props> = ({ product }) => {
  const [choices, SetChoices] = useState<Choices>({});
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
                    console.log("choices", choices);
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];
                    console.log(activeChoice);
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
            <Button
              className='s.button'
              onClick={() => {
                alert("Hello World");
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
