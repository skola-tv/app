'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "51b42b957e9be20f23ba183251520417",
"assets/assets/cache/geo_ine.json": "a089b0ea2384c6d942eadf481aeedfa9",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/logo.jpeg": "04d595e3449014e61a1780b105c12d8a",
"assets/assets/images/logo.png": "7ab5a7135821eacdde5e541c3d02c648",
"assets/assets/images/logo2.png": "650c570cdba3558d781ef322bae7eb67",
"assets/FontManifest.json": "1f0bcae4f430ba44305270f9792a3bc5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d4cb1e30d6c2f04f7f9c4078cb2ca20b",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "36226741fb1c82d04747b31112745ebe",
"/": "36226741fb1c82d04747b31112745ebe",
"main.dart.js": "44ecdab7983065d87687a4ed4c3995be",
"manifest.json": "54b18457669bfe44027ce86a62568d60"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
