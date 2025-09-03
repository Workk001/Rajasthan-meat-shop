export default function sitemap() {
    const base = 'https://rajasthanmeatshop.in';
    return [
        { url: `${base}/`, lastModified: new Date() },
        { url: `${base}/products`, lastModified: new Date() },
        { url: `${base}/about`, lastModified: new Date() },
        { url: `${base}/contact`, lastModified: new Date() },
    ];
}
