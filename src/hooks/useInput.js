import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function HandleValueChange({ target }) {
    setValue(target.value);
  }

  return [value, HandleValueChange, setValue];
}
