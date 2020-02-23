'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "960dede0e85dade2d049451a5e1e0260",
"/main.dart.js": "4724fe8682feb17d5b89775962dea890",
"/assets/LICENSE": "c76c9861ffcb6f05e19853d4b142f022",
"/assets/AssetManifest.json": "459f3babf40cadee9ad91a57557a7629",
"/assets/FontManifest.json": "c00c4c8a28fbd09b45be5f882bac5841",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/local_apis/home_page.json": "06261ff773c3f93c836f4e62009ee321",
"/assets/assets/images/app_logo.jpg": "b551e8b74e0ec165d81bd20b5999b89c",
"/assets/assets/images/dummygrid.jpeg": "2f7c08530538161325c72081ac7e7d16",
"/assets/assets/fonts/ProductSansRegular.ttf": "bf3d592f44d0e2a5889ac5934aec4741"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
