import { Input, Typography, Textarea } from '@material-tailwind/react';
import type { InputProps } from '@material-tailwind/react';

export interface InputElementProps {
  title: string;
  type?: React.HTMLInputTypeAttribute;
  size: InputProps['size'];
  placeholder?: string;
  className?: string;
  labelProps?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  typeInput: string;
}

const InputElement = ({ title, size, placeholder, className, labelProps, onChange, value, typeInput }: InputElementProps) => {
  return (
    <div className="w-full mb-5">
      <Typography variant="h1" color="blue-gray" className="mb-1 font-bold text-indigo-400 text-md" onPointerEnterCapture="" onPointerLeaveCapture="" placeholder="">
        {title}
      </Typography>
      {typeInput === 'textarea' ? (
        <Textarea
          variant="outlined"
          onPointerEnterCapture=""
          onPointerLeaveCapture=""
          size={size}
          value={value}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          labelProps={{
            className: labelProps,
          }}
        />
      ) : (
        <Input
          onPointerEnterCapture=""
          onPointerLeaveCapture=""
          crossOrigin=""
          size={size}
          value={value}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          labelProps={{
            className: labelProps,
          }}
        />
      )}
    </div>
  );
};

export default InputElement;
