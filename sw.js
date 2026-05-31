const CACHE_NAME = 'p42-toolkit-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './config-gen.html',
  './bot.html',
  './wuwa-visuals.html',
  './assets/css/style.css',
  './assets/css/config-gen.css',
  './assets/js/script.js',
  './assets/js/config-gen.js',
  './assets/js/p42brain.js',
  './data/brain-data.json',
  './data/cvar_knowledge.json',
  './data/presets.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map(key => {
      if (key !== CACHE_NAME) {
        console.log('[SW] Removing old cache', key);
        return caches.delete(key);
      }
      return null;
    })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        if (event.request.url.endsWith('.html') || event.request.url.endsWith('.json')) {
          fetch(event.request).then(networkResponse => {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }).catch(() => {});
        }
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => (
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
      ));
    })
  );
});
