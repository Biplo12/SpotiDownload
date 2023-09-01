/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // !STARTERCONF Change the siteUrl
  siteUrl: 'https://spotify-playlist-scrapper.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
