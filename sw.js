const CACHE_NAME = 'pocket_tanpura';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// Install Event: Cache app resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch Event: Serve from cache if offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Return cached response if found, otherwise fetch from network
            return response || fetch(event.request);
        })
    );
});