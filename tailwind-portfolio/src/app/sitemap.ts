import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://manish-joshi.vercel.app',
            lastModified: new Date(),
        }
    ]
}