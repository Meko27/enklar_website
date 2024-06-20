/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://enklar.de",
  generateRobotsTxt: true, // Optional: Also generate a robots.txt
};


/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://enklar.de",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/datenschutzerklaerung' },
      { userAgent: '*', disallow: '/impressum' },
    ],
  },
};