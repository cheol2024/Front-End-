import dynamic from 'next/dynamic';
import React from 'react';

// Lottie 컴포넌트를 클라이언트에서만 동적으로 로드
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false, // 서버 측 렌더링 비활성화
});

import lottieJson from '/public/animation.json';

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: '100%', height: '100%' }}
    />
  );
}
