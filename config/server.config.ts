export const serverConfig = {
  hostname: process.env.HUB_HOST || 'localhost',
  path: '/wd/hub',
  port: parseInt(process.env.HUB_PORT, 10) || 4444,
};
