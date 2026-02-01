'use client';

import { useEffect } from 'react';

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
    useEffect(() => {
        // Initialize dataLayer
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });

            // Inject GTM script
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
            document.head.appendChild(script);
        }
    }, [gtmId]);

    // noscript fallback
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
    );
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        dataLayer: any[];
    }
}
