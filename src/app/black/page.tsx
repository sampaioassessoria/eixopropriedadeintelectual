import type { Metadata } from 'next';
import BlackFridayClient from './BlackFridayClient';

export const metadata: Metadata = {
    title: 'Black Friday: 30% off no registro de marca',
    description:
        'Black Friday da Eixo Intelectual: 30% de desconto nos honorários do registro de marca, software e desenho industrial. De 17 a 30 de novembro. Solicite sua análise gratuita.',
    alternates: { canonical: '/black' },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://eixointelectual.com.br/black',
        title: 'Black Friday Eixo: a mesma segurança, 30% menos',
        description:
            '30% de desconto nos honorários do registro de marca. Só de 17 a 30 de novembro.',
        siteName: 'Eixo Intelectual',
        images: [{ url: '/social preview.png', alt: 'Black Friday Eixo Intelectual' }],
    },
};

export default function BlackFridayPage() {
    return <BlackFridayClient />;
}
