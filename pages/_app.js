import { useEffect } from 'react';

function ErrorBoundary({ children }) {
    useEffect(() => {
        const handleError = (error) => {
            console.error('Client-side error:', error);
        };

        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    return <>{children}</>;
}

export default function MyApp({ Component, pageProps }) {
    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
}
