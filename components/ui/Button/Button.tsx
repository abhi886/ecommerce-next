import { FC, ReactNode } from "react";
import s from "./Button.module.css";
interface Props {
  children: ReactNode | ReactNode[];
}
//Button is a Functional component with type Props that is the children props passed will be Either
// React Node or an array of React Node.

const Button: FC<Props> = ({ children }) => {
  return (
    <button className={s.root} type='button'>
      {children}
    </button>
  );
};
export default Button;
