'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5f13b71d18020f16eb2c8ea099ea7058",
"assets/assets/cache/geo_ine.json": "a089b0ea2384c6d942eadf481aeedfa9",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/logo.jpeg": "04d595e3449014e61a1780b105c12d8a",
"assets/assets/images/powa_swag.png": "7927e1936bb24f79306eba688a6e6129",
"assets/FontManifest.json": "1f0bcae4f430ba44305270f9792a3bc5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "aa4f19ece70af2385a4a27caf75fd348",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"favicon.ico": "d29a5ff81fb22496a07b1bf3e16335bc",
"icons/Icon-192.png": "46d8b84aaa3b297b0d42872e244e8711",
"icons/Icon-512.png": "305cb6f3fd34535e8bbf2c8e826cd7e5",
"index.html": "7cd1a546212474bca1c1fd1800e9dc08",
"/": "7cd1a546212474bca1c1fd1800e9dc08",
"main.dart.js": "e1444e88b07208db55d53a2bd70742aa",
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
