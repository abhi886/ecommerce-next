import React, { FC } from "react";

interface Props {
  color?: string;
  label?: string;
}
const Swatch: FC<Props> = ({ color, label }) => {
  return (
    <>
      {color && <>Color: {color}</>}
      Label: {label.toLowerCase()}
      {` , `}
    </>
  );
};
export default Swatch;
