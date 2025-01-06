import { useState } from 'react';

export default function useInput(defaultValue: string = ''): [string, ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, React.Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = useState<string>(defaultValue);

  function HandleValueChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(target.value);
  }

  return [value, HandleValueChange, setValue];
}
