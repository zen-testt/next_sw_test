addEventListener("install", (event) => {
  self.skipWaiting();
  console.log("Service worker installed!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      const promiseChain = fetch(event.request.clone());
      event.waitUntil(promiseChain);
      return promiseChain;
    })()
  );
});
