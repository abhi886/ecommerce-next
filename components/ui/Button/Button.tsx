import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import s from "./Button.module.css";
import cn from "classnames";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}
//Button is a Functional component with type Props that is the children props passed will be Either
// React Node or an array of React Node.

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(s.root, className)} {...rest} type='button'>
      {children}
    </button>
  );
};
export default Button;

// Things to remember
/* 
1. The children props in Button component is of type ReactNode | ReactNode[], The props extends ButtonHTMLAttribu
tes<HTMLButtonElement>, so we can use button attributes without providing the type for it. eg
...rest includes all the button attributes like onClick, onBlur etc. In this component onClick event 
is passed from Proview component.
*/
