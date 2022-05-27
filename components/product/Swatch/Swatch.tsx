import React, { FC } from "react";
import s from "./Swatch.module.css";
import Check from "../../icons/Check";
interface Props {
  color?: string;
  label?: string;
  variant: "size" | "color" | string;
}
const Swatch: FC<Props> = ({ color, label, variant }) => {
  variant = variant?.toLowerCase();
  return (
    <button className={s.root} style={color ? { backgroundColor: color } : {}}>
      {/* {color && <>Color: {color}</>}
      Label: {label.toLowerCase()}
      {` , `} */}
      <span>{/* <Check /> */}</span>
      {variant === "size" ? label : null}
    </button>
  );
};
export default Swatch;
