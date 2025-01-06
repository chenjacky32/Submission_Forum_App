import { Button } from '@material-tailwind/react';
import { RequiredDefaultProps } from '../Navigation';
import type { ButtonProps } from '@material-tailwind/react';

type ButtonElementProps = {
  title: string;
  variant?: ButtonProps['variant'];
  placeholder?: string;
  type?: ButtonProps['type'];
  size?: ButtonProps['size'];
  className?: ButtonProps['className'];
};

const ButtonElement = ({ title, variant, placeholder, type, size, className }: ButtonElementProps) => {
  return (
    <Button type={type} variant={variant} placeholder={placeholder} size={size} className={className} {...RequiredDefaultProps}>
      {title}
    </Button>
  );
};

export default ButtonElement;
