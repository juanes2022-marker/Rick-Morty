
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/characters",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3NQBMPG.js"
    ],
    "route": "/characters"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5021, hash: '822792f76f18d55f608a9e1cccf94009fbf0df8107ac64136fce1f8733c58f31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 994, hash: '5b74dc8c6b85dc4ae739547fc1073d8aae2b09a53912dbf6231ae439996524a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'characters/index.html': {size: 27872, hash: '690f3979fe0077189e25657d71f68443d5774ddedf415dde18eb02c75fdededd', text: () => import('./assets-chunks/characters_index_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
