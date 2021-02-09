import React from 'react';

class Robots extends React.Component  {

    static async getInitialProps({ res }) {
        const siteName = process.env.SITE_NAME;
        const robots = `Sitemap: https://${siteName}.dp.la/api/sitemap

User-agent: *
Allow: /*
Allow: /api/sitemap
Disallow: /api/health
Disallow: /api/dpla/*`;

        res.setHeader('Content-Type', 'text/plain');
        res.write(robots);
        res.end();
    }
};

export default Robots;