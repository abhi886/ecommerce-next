import React, { FC, Children, isValidElement } from "react";
import s from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";

const ProductSlider: FC = ({ children }) => {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged() {},
    loop: true,
  });

  return (
    <div ref={sliderRef as any} className={s.root}>
      <div className='keen-slider h-full transition-opacity'>
        <button
          className={cn(s.leftControl, s.control)}
          onClick={(e) => slider.current?.prev()}
        />

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
        <button
          className={cn(s.rightControl, s.control)}
          onClick={(e) => slider.current?.next()}
        />
      </div>
    </div>
  );
};
export default ProductSlider;
