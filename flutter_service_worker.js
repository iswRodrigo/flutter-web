'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e455c47100248a03e5a37aa1e277197c",
"assets/assets/btn-candado-closed.png": "fb28583923a301f0d70809cc77e6f0d3",
"assets/assets/btn-candado-open.png": "46b8bcc3d38876cc442edf4b078e7965",
"assets/assets/btn-micro-closed.png": "74005a314080ac23f123790766c6671f",
"assets/assets/btn-micro-open.png": "c2d45fbc76eb5fe3c2eae45410ebb004",
"assets/assets/bunker.gif": "b6413d2103044e8a7c4031b589bf6332",
"assets/assets/icon-arrow.png": "8a88433403e0ffa01d26885b7fe3e40c",
"assets/assets/icon-ayuda.png": "1c209516ab585e5d9fa3a53d428b4d44",
"assets/assets/icon-candado-open.png": "edf5815c73a86dd3b72f8b642c256e92",
"assets/assets/icon-edit.png": "dd47a8be7b2451e6e7144847463514a6",
"assets/assets/icon-favoritos.png": "41aed4d2e19fe00ec34e2013551d8f60",
"assets/assets/icon-micro-closed.png": "aab739d4a45a11fa01d564e738262d38",
"assets/assets/icon-micro-open.png": "973eab80bd7ac76def511eaf621095f6",
"assets/assets/icon-seguridad-active.png": "6a6679425829e51605a405d314ea5cea",
"assets/assets/icon-seguridad-w.png": "c3441f01945392fd15cc53b24748ac1a",
"assets/assets/icon-seguridad.png": "54eb6e09d826406526624c3e513f30d1",
"assets/assets/icon-truck.png": "7b11b1d612c5c18a72e3b567d655e627",
"assets/assets/icon-unidades-active.png": "2f5e335ca50d1a988afac0ebf4de1bbf",
"assets/assets/icon-unidades.png": "c90307f0c8e656b3f72617f30db2325e",
"assets/assets/icon-viaje-active.png": "fce3e5b2c04326d3228b73818eff49ed",
"assets/assets/icon-viaje.png": "14e3cfc553da0c93930d359543c8a9c9",
"assets/assets/Isotipo-26px.png": "14f7534d925f08282bba03ff09effa16",
"assets/assets/isotipoBunker.png": "665d3cb1380b4c1c115c4e1982b553a1",
"assets/assets/isotopoBunkerW.png": "aaadc03182f064d2935de627997ee35f",
"assets/assets/marker_nane_naranja.png": "f2634a2230fc44edb94e4fe2d0ca2dbf",
"assets/assets/textura-fondo-black.png": "53609a60b96023fce203af8b94e4b015",
"assets/assets/ti1-active.png": "ada6d94fcd6c40d6db21aa0e07c20d7e",
"assets/assets/ti1-icon.png": "cfda75a18a04e462bfa8d3cbf77ac5e7",
"assets/assets/ti1-marker.png": "86b986d8f33db4ad471a60972ef93763",
"assets/assets/ti2-active.png": "32450dac47ce442a08b5808c3118afcf",
"assets/assets/ti2-icon.png": "24f4384a337caeef189a7f54cd1dfe9e",
"assets/assets/ti2-marker.png": "5c0221f6187811e21431eb7dfc5e9f79",
"assets/assets/ti3-active.png": "3a636e0cc3ec7720a775b2ec56fd8a11",
"assets/assets/ti3-icon.png": "c5f0f586e32983146b964f302b3fe57f",
"assets/assets/ti3-marker.png": "cceaa8a5cbebd9a57639c672c1245845",
"assets/assets/ti4-active.png": "bd877234fb1858e9a989bd31482e2a51",
"assets/assets/ti4-icon.png": "7b11b1d612c5c18a72e3b567d655e627",
"assets/assets/ti4-marker.png": "5a3c459e5cde3c5ae8bc5fab59621b7c",
"assets/assets/trailer-completo.png": "ab553aa6114af8aece47185e7bef0117",
"assets/assets/trailer.png": "ad94da122690cabd7336d63991f3755e",
"assets/data/dataUnidades.json": "302ebccf374e8459ae021ec7224c33c1",
"assets/FontManifest.json": "a0555b357ef5f9693212dc6ef51ed8cd",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/toxigenesis-bd.ttf": "b8b034ea1980e6988cc1106f1aae25cb",
"assets/NOTICES": "38ed97f0834496cbdda7a0508561c07b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "755e0550a1f4b763bfa3b1c515c6e89b",
"/": "755e0550a1f4b763bfa3b1c515c6e89b",
"main.dart.js": "c0bd59a88f4fe3d51689bffb160527c3",
"manifest.json": "792c890c99a21da8fd5f0c1d6705ae2b",
"version.json": "c3cced494060aec04881fa4e90a0ac67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
