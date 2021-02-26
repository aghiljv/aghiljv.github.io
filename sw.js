importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"
);

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  debug: false
});

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim();

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting();

workbox.precaching.cleanupOutdatedCaches();

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(
  new RegExp("https://aghiljose.com/.*"),
  new workbox.strategies.CacheFirst({
    cacheName: "aghil_jose_260221_01",
    cacheExpiration: { maxEntries: 100, maxAgeSeconds: 604800 }
  }),
  "GET"
);
workbox.routing.registerRoute(
  new RegExp("/_nuxt/"),
  new workbox.strategies.CacheFirst({}),
  "GET"
);
workbox.routing.registerRoute(
  new RegExp("/"),
  new workbox.strategies.StaleWhileRevalidate({}),
  "GET"
);
workbox.routing.setCatchHandler(({ url, event, params }) => {
  const strategy = new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 10
  });
  return strategy.handle({
    request: new Request(url)
  });
});
