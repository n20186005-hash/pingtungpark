// Retire only this site's old offline homepage cache.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(caches.delete('pingtungpark-v1').then(()=>self.registration.unregister()).then(()=>self.clients.claim())));
