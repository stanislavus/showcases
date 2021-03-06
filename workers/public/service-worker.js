self.addEventListener('install', (event) => {
  console.log('The service worker has been installed', event);
});

self.addEventListener('activate', (event) => {
  console.log('The service worker has been activated', event);
});

self.addEventListener('fetch', (event) => {
  console.log(`Let's try to catch network event`, event);

  event.waitUntil(async function() {
    // Exit early if we don't have access to the client.
    // Eg, if it's cross-origin.
    console.log(123213321);
    if (!event.clientId) return;

    // Get the client.
    const client = await clients.get(event.clientId);
    // Exit early if we don't get the client.
    // Eg, if it closed.
    if (!client) return;

    // Send a message to the client.
    client.postMessage({
      msg: "Hey I just got a fetch from you!",
      url: event.request.url
    });

  }());
});