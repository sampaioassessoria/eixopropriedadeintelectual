import { MetadataRoute } from 'next';
import { getAllPostIds } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://eixointelectual.com.br';

    // Static pages
    const routes = [
        '',
        '/blog',
        '/parceiros',
        '/obrigado',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog posts
    const postIds = getAllPostIds();
    const blogRoutes = postIds.map((post) => ({
        url: `${baseUrl}/blog/${post.params.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
