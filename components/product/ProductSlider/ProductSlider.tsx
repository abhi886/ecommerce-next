import React, { FC, Children, isValidElement } from "react";
import s from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";

const ProductSlider: FC = ({ children }) => {
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      console.log("changing to slide:");
    },
    loop: true,
  });

  return (
    <div ref={sliderRef as any} className={s.root}>
      <div className='keen-slider h-full transition-opacity duration-150'>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${
                child.props.className
                  ? `${child.props.className} keen-slider__slide`
                  : ""
              }`,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
export default ProductSlider;
