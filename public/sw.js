// Service Worker - Empty/Unregistered
// This file exists to prevent 404 errors from cached service worker registrations

self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clean up old caches and unregister
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => {
      // Unregister this service worker
      return self.registration.unregister();
    })
  );
});

// Don't handle any fetch events
self.addEventListener('fetch', (event) => {
  // Let the browser handle all requests normally
  return;
});
