import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
