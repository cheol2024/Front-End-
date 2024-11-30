import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '/public/animation.json';

export default function Animation() {
    // `ResizeObserver` 오류를 무시
    React.useEffect(() => {
        const observerErrorHandler = (e) => {
            if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
                e.stopImmediatePropagation();
            }
        };

        window.addEventListener('error', observerErrorHandler);

        return () => {
            window.removeEventListener('error', observerErrorHandler);
        };
    }, []);

    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: '100%', height: '100%' }}
        />
    );
}
