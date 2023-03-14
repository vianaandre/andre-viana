import { useRef } from 'react';
import { LottieRef } from 'lottie-react';

import { useAboutProps } from './types';

export function useAbout(): useAboutProps {
  const isLottieIconArticle = useRef();

  return {
    lottieIconArticle: isLottieIconArticle as any as LottieRef,
  };
}
