export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://eixointelectual.com.br/#organization',
                name: 'Eixo Intelectual',
                url: 'https://eixointelectual.com.br',
                logo: 'https://eixointelectual.com.br/favicon.png',
                sameAs: [
                    'https://www.instagram.com/eixointelectual',
                    'https://www.linkedin.com/company/eixointelectual',
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+55-11-99999-9999', // Placeholder
                    contactType: 'customer service',
                    areaServed: 'BR',
                    availableLanguage: 'Portuguese',
                },
            },
            {
                '@type': 'Service',
                name: 'Registro de Marca no INPI',
                provider: {
                    '@id': 'https://eixointelectual.com.br/#organization',
                },
                description: 'Serviço completo de registro de marcas e patentes no INPI, garantindo a proteção da propriedade intelectual da sua empresa.',
                areaServed: 'BR',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Serviços de Propriedade Intelectual',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Registro de Marca',
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Registro de Software',
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Registro de Patentes',
                            },
                        },
                    ],
                },
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'Por que registrar minha marca no INPI?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'O registro no INPI é a única forma de garantir a exclusividade sobre o nome e logo da sua empresa em todo o território nacional, protegendo contra cópias e uso indevido.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Quanto tempo demora o processo de registro de marca?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'O processo no INPI pode levar de 12 a 24 meses, mas com a Eixo Intelectual, protocolamos seu pedido em até 24 a 48 horas, garantindo sua prioridade.',
                        },
                    },
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
