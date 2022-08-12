import React, { FC } from "react";
import s from "./Swatch.module.css";
import Check from "../../icons/Check";
import cn from "classnames";
import { isDark } from "@lib/color";
interface Props {
  active?: boolean;
  color?: string;
  label?: string;
  variant: "size" | "color" | string;
  onClick: () => void;
}
const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  label = label.toLowerCase();
  variant = variant?.toLowerCase();
  const rootClassName = cn(s.root, {
    [s.active]: active, // if active is true then active class is applied,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
  });
  return (
    <button
      {...rest}
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : null}
    </button>
  );
};
export default Swatch;
