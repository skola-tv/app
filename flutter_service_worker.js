'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "android-icon-144x144.png": "ec25422b493199de8bb6c4e6a2295613",
"android-icon-192x192.png": "841aba2b5f31a17e4ef60658e1e97752",
"android-icon-36x36.png": "d96c3b4634cc8c1efbc2d8a500b7dca5",
"android-icon-48x48.png": "e6d35fa575c6cb7afa51608dc571784f",
"android-icon-72x72.png": "f66015ea8058068ba9295d6684376145",
"android-icon-96x96.png": "d92e7bca8514bb49d36f9ec817546216",
"apple-icon-114x114.png": "3e6f0014b0aef3394d9c1b7161b6c0f6",
"apple-icon-120x120.png": "ae0566ac8815adda4af8f9e87d20e3ad",
"apple-icon-144x144.png": "ec25422b493199de8bb6c4e6a2295613",
"apple-icon-152x152.png": "457ca0e9950571343283f335a1581b19",
"apple-icon-180x180.png": "83ccc39ec7130ab68ea552f274656645",
"apple-icon-57x57.png": "1b477a4ca3c6ee8be04f50adcc646b11",
"apple-icon-60x60.png": "46e96055fa3d53c6471d443c27345b06",
"apple-icon-72x72.png": "f66015ea8058068ba9295d6684376145",
"apple-icon-76x76.png": "77e689f2a2739d8f84c1da2caa7e06be",
"apple-icon-precomposed.png": "33ad1e1dac848872d0355b15f28cdac8",
"apple-icon.png": "33ad1e1dac848872d0355b15f28cdac8",
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
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"favicon-16x16.png": "b4357db08279ffae1d7ed770acd4c755",
"favicon-32x32.png": "2cbc78c90bb6200a818df1c2ca67a2c2",
"favicon-96x96.png": "d92e7bca8514bb49d36f9ec817546216",
"favicon.ico": "d29a5ff81fb22496a07b1bf3e16335bc",
"icons/Icon-192.png": "46d8b84aaa3b297b0d42872e244e8711",
"icons/Icon-512.png": "305cb6f3fd34535e8bbf2c8e826cd7e5",
"images/icons/icon-128x128.png": "237ed02aa0cc24bc51a386a3fa750670",
"images/icons/icon-144x144.png": "e6d80e9e07058364efc2731418d5fb44",
"images/icons/icon-152x152.png": "a48fe6f4263a3f5aa82e255dafba0b47",
"images/icons/icon-192x192.png": "46d8b84aaa3b297b0d42872e244e8711",
"images/icons/icon-384x384.png": "d04f7f43f6fb23ed26a53104d3145b67",
"images/icons/icon-512x512.png": "305cb6f3fd34535e8bbf2c8e826cd7e5",
"images/icons/icon-72x72.png": "a26f04af3d28912895d3c1553a31a310",
"images/icons/icon-96x96.png": "2b7230dea141ba73ba5767dd33c2838e",
"index.html": "7aa3c34bb528d302dd5b624b8d5a319d",
"/": "7aa3c34bb528d302dd5b624b8d5a319d",
"main.dart.js": "1dfc52ab422dac064222f3c0d8e3d0d0",
"manifest.json": "c09dbd88a7f1bf94d9d84f532350675a",
"ms-icon-144x144.png": "ec25422b493199de8bb6c4e6a2295613",
"ms-icon-150x150.png": "111f80884dee6b1806492dc8ed8633df",
"ms-icon-310x310.png": "c5314a90ef4fc3d43c47b523f58f8307",
"ms-icon-70x70.png": "531eb9756d5f6d1f72c95271b27eaeee"
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
