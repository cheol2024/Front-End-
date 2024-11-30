import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Lottie = dynamic(() => import('lottie-web'), { ssr: false });

export default function AnimationComponent() {
    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animation.json', // 애니메이션 JSON 경로
        });

        return () => animation.destroy(); // cleanup
    }, []);

    return <div id="lottie-container" style={{ width: 400, height: 400 }} />;
}
