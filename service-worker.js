const CACHE_NAME = 'status-frota-v2';
self.addEventListener('fetch', event => {
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(fetch(event.request));
  } else {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
  }
});
