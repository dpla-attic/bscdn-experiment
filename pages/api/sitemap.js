const absoluteLink = (path) => { return `https://${process.env.SITE_NAME}.dp.la${path}` }

const buildEntry = (link, date) => {
    return `<url>
    <loc>${link}</loc>
    <lastmod>${date}</lastmod>
</url>
`;
}
const sitemap = (req, res) => {

    const date = new Date().toISOString();

    const staticLinks = [
        '/'
    ].map(absoluteLink);

    const entries = []
        .concat(staticLinks)
        .map((link) => buildEntry(link, date));

    const sitemap =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
        + "".concat(...entries)
        + `\n</urlset>`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/xml');
    res.end(sitemap);
};

export default sitemap;