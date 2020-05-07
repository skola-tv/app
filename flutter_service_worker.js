'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f3eb3182fcf638b421cdfeaf1d82ee19",
"assets/assets/cache/geo_ine.json": "a089b0ea2384c6d942eadf481aeedfa9",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/logo.jpeg": "04d595e3449014e61a1780b105c12d8a",
"assets/assets/images/powa_swag.png": "7927e1936bb24f79306eba688a6e6129",
"assets/assets/images/schoolyear/bg_0.jpeg": "c4e68a7665d1f3a8c6c5a94dc0446828",
"assets/assets/images/schoolyear/bg_1.jpeg": "53893662e1b02ac8f23ebdbb74aec00c",
"assets/assets/images/schoolyear/bg_12.jpeg": "483a3711e4a1a91afed6718132a2209c",
"assets/assets/images/schoolyear/bg_2.jpeg": "b84074ac24176b835b7aecfac036a840",
"assets/assets/images/schoolyear/bg_3.jpeg": "6dbd58ee9b66899f85fe2c056acb7870",
"assets/assets/images/schoolyear/bg_4.jpeg": "baece73a58c4547722d0da7155b3d783",
"assets/assets/images/schoolyear/bg_board.jpeg": "578c9bcf550d84c5a44330d70edae357",
"assets/FontManifest.json": "1f0bcae4f430ba44305270f9792a3bc5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "aa4f19ece70af2385a4a27caf75fd348",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"browserconfig.xml": "80016bcba5707e506c8278ca49483585",
"icons/android-icon-144x144.png": "12e1ae7006e40ec9a1fdde356a71ff01",
"icons/android-icon-192x192.png": "174e43ed6967a745066139fe444854f8",
"icons/android-icon-36x36.png": "52c05b164bb8138183c5aeddb2180823",
"icons/android-icon-48x48.png": "ffb8e8f0c64b9e12f77fcec877b00db9",
"icons/android-icon-72x72.png": "c361e6416de960ca097656507c2c1d4b",
"icons/android-icon-96x96.png": "0cc4db66a2e95efbadabdfa2f927bc60",
"icons/apple-icon-114x114.png": "69c70546edb1ebe6f9d76110f2192945",
"icons/apple-icon-120x120.png": "e6441152d1b03b465bb4ba4f94cd9d8d",
"icons/apple-icon-144x144.png": "0fc50cb09a0f01aa6a21e55981d95299",
"icons/apple-icon-152x152.png": "7ab94a429bd16854b069031c5d59c7f7",
"icons/apple-icon-180x180.png": "cff58e3143e471aa05c3394a3a5b6abe",
"icons/apple-icon-57x57.png": "7a0ad718039bea91742c56907c46dc69",
"icons/apple-icon-60x60.png": "365a37e2a506db8839b95b736fd180b3",
"icons/apple-icon-72x72.png": "2335e6c4cceb90efc837d6d7ea631222",
"icons/apple-icon-76x76.png": "cc999e3463716ac69d56bc8259f38bf7",
"icons/apple-icon-precomposed.png": "36daf73b64968e1394fd7e4880706f48",
"icons/apple-icon.png": "36daf73b64968e1394fd7e4880706f48",
"icons/favicon-16x16.png": "fdb7123846644fda16c755c3fe21f89e",
"icons/favicon-32x32.png": "e247434478951ef08efd3e16bc8eeeab",
"icons/favicon-96x96.png": "0cc4db66a2e95efbadabdfa2f927bc60",
"icons/favicon.ico": "9af8f19b3796dc2414eebf01be95397f",
"icons/Icon-192.png": "852d278a7af18f08447152ed17efe3fe",
"icons/Icon-512.png": "e3b2ff857486a6e48b379da3981b91a2",
"icons/ms-icon-144x144.png": "0fc50cb09a0f01aa6a21e55981d95299",
"icons/ms-icon-150x150.png": "81390fee001ac41bf8e4797f4097fc2d",
"icons/ms-icon-310x310.png": "116eab7e24abb064e15ad3db82fb878f",
"icons/ms-icon-70x70.png": "f375b8db18e91febe0231d60a852eb1d",
"images/icons/icon-128x128.png": "67b2724b8e7624012f3c641daa25feea",
"images/icons/icon-144x144.png": "24c09b17fea067bfb4721abd723946d8",
"images/icons/icon-152x152.png": "b7b0ef9ea328e4112354e926e210403e",
"images/icons/icon-192x192.png": "852d278a7af18f08447152ed17efe3fe",
"images/icons/icon-384x384.png": "92fec33a070291ebcd42b14be8332941",
"images/icons/icon-512x512.png": "e3b2ff857486a6e48b379da3981b91a2",
"images/icons/icon-72x72.png": "eb707d64670fb4dcdcbb2219db95c85a",
"images/icons/icon-96x96.png": "34a28feb40aaa4e320122a19a146e8db",
"index.html": "07ed632f6a3b3f1caf2eaea59c62b8f2",
"/": "07ed632f6a3b3f1caf2eaea59c62b8f2",
"main.dart.js": "b236b1457b3c2b0a038dd1dabc62ad45",
"manifest.json": "06a2eb122a95e7364ccecfcab38bddd7"
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
