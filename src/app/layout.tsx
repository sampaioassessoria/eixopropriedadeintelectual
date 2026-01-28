import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://eixointelectual.com.br'),
    title: {
        default: 'Registro de Marca no INPI e Patentes | Eixo Intelectual',
        template: '%s | Eixo Intelectual'
    },
    description: 'Especilistas em Registro de Marca no INPI. Proteja sua empresa, patente ou software com segurança e agilidade. Evite multas e plágio com a Eixo Intelectual.',
    keywords: [
        'registro de marca inpi',
        'registrar marca',
        'proteção de marca',
        'patentes',
        'registro de software',
        'propriedade intelectual',
        'eixo intelectual',
        'como registrar marca'
    ],
    authors: [{ name: 'Eixo Intelectual' }],
    creator: 'Eixo Intelectual',
    publisher: 'Eixo Intelectual',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://eixointelectual.com.br',
        title: 'Registro de Marca no INPI | Eixo Intelectual',
        description: 'Blinde o seu patrimônio intelectual. Registre sua marca, patente ou software com quem entende do assunto.',
        siteName: 'Eixo Intelectual',
        images: [
            {
                url: '/og-image.jpg', // Make sure this exists or update later
                width: 1200,
                height: 630,
                alt: 'Eixo Intelectual - Proteção de Marca',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eixo Intelectual | Registro de Marcas e Patentes',
        description: 'Especilistas em Registro de Marca no INPI e Proteção de Ativos.',
        images: ['/og-image.jpg'],
    },
    icons: {
        icon: '/favicon.png',
        apple: '/apple-touch-icon.png',
    },
};

import JsonLd from '../components/JsonLd';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMT94ZN');`
                    }}
                />
                {/* End Google Tag Manager */}
            </head>
            <body className="min-h-screen" suppressHydrationWarning>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NMT94ZN"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <JsonLd />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
