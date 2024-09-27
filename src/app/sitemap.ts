export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/books`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/authors`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/publishers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
