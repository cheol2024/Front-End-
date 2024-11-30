import React from 'react';

export default function MyApp({ Component, pageProps }) {
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

    return <Component {...pageProps} />;
}
