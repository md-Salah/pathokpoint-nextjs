import { NextResponse } from "next/server";


async function generateSitemaps() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/book/all?page=1`
    );
    const totalBooks = parseInt(response.headers.get("X-Total-Count") || "10");
    const productPerSitemap = 10000;
    const numberOfSitemaps = Math.ceil(totalBooks / productPerSitemap);

    const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
        id: index,
        url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/books/sitemap/${index}.xml`
    }));
    return sitemaps;
}


export async function GET() {
    try {
        const dynamicSitemaps = await generateSitemaps();
        const sitemaps = [
            `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/sitemap.xml`,
            ...dynamicSitemaps.map(sitemap => sitemap.url)
        ]

        const sitemapIndexXML = await buildSitemapIndex(sitemaps);

        return new NextResponse(sitemapIndexXML, {
            headers: {
                "Content-Type": "application/xml",
                "Content-Length": Buffer.byteLength(sitemapIndexXML).toString(),
            },
        });

    } catch (error) {
        console.error("Error generating sitemap index:", error);
        return NextResponse.error();
    }
}


async function buildSitemapIndex(sitemaps) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    for (const sitemapURL of sitemaps) {
        xml += "<sitemap>";
        xml += `<loc>${sitemapURL}</loc>`;
        xml += "</sitemap>";
    }

    xml += "</sitemapindex>";
    return xml;
}

