const CACHE_NAME = 'secu-asistencia-v2';
const assets = [
  './',
  './index.html',
  'https://via.placeholder.com/192/1d3557/ffffff?text=Secu'
];

// Instalar Service Worker y cachear archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Estrategia: Primero buscar en Cache, si no hay, ir a Red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
