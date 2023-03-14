import { useState } from 'react';
import { useInputProps } from './types';

export function useInput(): useInputProps {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  return {
    focus: isFocus,
    onBlur: handleBlur,
    onFocus: handleFocus,
  };
}
