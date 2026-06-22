/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/victoria-scott' : '',
  assetPrefix: isGithubPages ? '/victoria-scott/' : '',
};

export default nextConfig;
