self.addEventListener('install', function(e) {
  console.log("Installing");
});

self.addEventListener('activate', function(e) {
  console.log("Activating");
});

self.addEventListener('fetch', function(e) {
  console.log("Fetching");
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
