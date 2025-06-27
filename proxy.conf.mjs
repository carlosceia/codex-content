export default [
  {
    path: ['/apps/tutorial/**'],
    target: 'http://localhost:9021',
    changeOrigin: true,
    secure: false,
    ws: true
  },
  {
    target: 'http://ux.latest.stage.c8y.io',
    ws: true,
    secure: false,
    changeOrigin: true,
    timeout: 120000,
    proxyTimeout: 120000,
    path: ['**'],
    /**
     * The following two lines are used to allow to use cookie-auth
     * also in un-secure environments like local-development. It removes
     * the secure flag and rewrites the domain for the cookie.
     *
     * You must never use this setting in production!
     */
    cookieDomainRewrite: 'localhost',
    /**
     * Excluding request for live reload and HMR from angular
     */
    context: function (path) {
      return !path.match(/\/ng-cli-ws/);
    },
    onProxyRes: proxyResponse => {
      'use strict';

      if (proxyResponse.headers['set-cookie']) {
        const cookies = proxyResponse.headers['set-cookie'].map(cookie =>
          cookie.replace(/;\s{0,}secure/gi, '')
        );
        proxyResponse.headers['set-cookie'] = cookies;
      }
    }
  }
];
