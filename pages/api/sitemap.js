const readline = require('readline');
const fs = require('fs');


const buildEntry = (link, date) => {
    return `<url>
    <loc>${link}</loc>
    <lastmod>${date}</lastmod>
</url>
`;
}
const sitemap = async (req, res) => {

    const date = new Date().toISOString();
    const baseUrl = `https://${process.env.SITE_NAME}.dp.la/item/`;

    const readInterface = readline.createInterface(
        fs.createReadStream("public/kenning.csv")
    );

    const sitemapHeader =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
        ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemapHeader)

    if (process.env.FULL_FRAME_IMAGES) {
        for await (const line of readInterface) {
            const itemId = JSON.parse(line);
            const entry = `<url><loc>${baseUrl}${itemId}</loc><image:image><image:loc>https://bscdn-images.dp.la/${itemId}.jpg</image:loc></image:image><lastmod>${date}</lastmod></url>`;
            res.write(entry);
        }
    } else {
        for await (const line of readInterface) {
            const itemId = JSON.parse(line);
            const entry = `<url><loc>${baseUrl}${itemId}</loc><lastmod>${date}</lastmod></url>`;
            res.write(entry);
        }
    }
    res.end("</urlset>");
};

export default sitemap;