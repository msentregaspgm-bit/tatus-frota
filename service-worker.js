self.addEventListener('install', e => {
  e.waitUntil(caches.open('status-frota-v1').then(cache => {
    return cache.addAll(['/', '/index.html', '/produtividade.html', '/manifest.json']);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});