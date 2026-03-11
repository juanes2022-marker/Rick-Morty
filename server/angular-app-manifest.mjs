
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://juanes2022-marker.github.io/Rick-Morty/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Rick-Morty/characters",
    "route": "/Rick-Morty"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3NQBMPG.js"
    ],
    "route": "/Rick-Morty/characters"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5067, hash: '46b23be4dc6581bb6f449988b6a14b84062abcf63adc3e339231862714488d7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: 'a87ee7917636cf2839cf0283d73862de18bc9e51ccb4b006a6bbf0c2f63f4575', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'characters/index.html': {size: 27918, hash: '2da226603444297b1bb207d335f698765ba77f164c99876ae2f3376444a11405', text: () => import('./assets-chunks/characters_index_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
