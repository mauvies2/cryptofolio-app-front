const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// // Set this to true for production
// var doCache = false;

// // Name our cache
// var CACHE_NAME = "my-pwa-cache-v1";

// // Delete old caches that are not our current one!
// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((keyList) =>
//       Promise.all(
//         keyList.map((key) => {
//           if (!cacheWhitelist.includes(key)) {
//             console.log("Deleting cache: " + key);
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   );
// });

// // The first time the user starts up the PWA, 'install' is triggered.
// self.addEventListener("install", function (event) {
//   if (doCache) {
//     event.waitUntil(
//       caches.open(CACHE_NAME).then(function (cache) {
//         // Get the assets manifest so we can see what our js file is named
//         // This is because webpack hashes it
//         fetch("asset-manifest.json")
//           .then((response) => {
//             response.json();
//           })
//           .then((assets) => {
//             // Open a cache and cache our files
//             // We want to cache the page and the main.js generated by webpack
//             // We could also cache any static assets like CSS or images
//             const urlsToCache = ["/", assets["main.js"]];
//             cache.addAll(urlsToCache);
//             console.log("cached");
//           });
//       })
//     );
//   }
// });

// // When the webpage goes to fetch files, we intercept that request and serve up the matching files
// // if we have them
// self.addEventListener("fetch", function (event) {
//   if (doCache) {
//     event.respondWith(
//       caches.match(event.request).then(function (response) {
//         return response || fetch(event.request);
//       })
//     );
//   }
// });
