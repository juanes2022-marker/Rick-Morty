
export default {
  basePath: 'https://juanes2022-marker.github.io/Rick-Morty',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
