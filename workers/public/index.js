if (typeof(Worker) !== 'undefined') {
  let i = 1;
  const webWorker = new Worker('web-worker.js');
  setInterval(() => webWorker.postMessage(i++), 1000);
  webWorker.onmessage = event => {
    console.log('Hello from Main', event.data);
  };
}

const openDB = (name, version = 1, options) => {
  const request = indexedDB.open(name, version); // Connection
  let db = null;
  return new Promise((resolve) => {
    request.onupgradeneeded = async function(event) {
      console.log(1, request.result);
      if (options.upgrade) {
        await options.upgrade(request.result);
      }
    };

    request.onsuccess = function(event) {
      db = request.result;
      resolve(db);
    };
  });
}
//
const dbAction = async (db, storeName, action) => {
  const tx = await db.transaction(storeName);
  const store = await tx.objectStore(storeName);
  const result = await action(store);
  await tx.done
  return Promise.resolve(result);
}

(async () => {
  const db = await openDB('app', 1, {
    async upgrade(db) {
      // const tx = db.transaction('tickets', 'readwrite');

      // Create store
      const store = db.createObjectStore("tickets", {keyPath: "id"});
      store.createIndex("by_title", "title", {unique: true});
      store.createIndex("by_place", "place");

      // setup initial data
      store.put({title: "Test Title 1", place: "Test Place 1", id: 1});
      store.put({title: "Test Title 2", place: "Test Place 1", id: 2});
      store.put({title: "Test Title 3", place: "Test Place 2", id: 3});
      // store.put({title: "Test Title 3", place: "Test Place 3", id: 4});

      // await tx.done
    }
  });
  // await dbAction(db, 'tickets', store => store.put({title: "Test Title 4", place: "Test Place 2", id: 4}));
//
//
//
  console.log(await dbAction(db, 'tickets', store => store.get(1)));
  console.log(await dbAction(db, 'tickets', store => store.getAllKeys()));
  console.log(await dbAction(db, 'tickets', store => store.getAll()));
//
  const tx = await db.transaction('tickets', 'readwrite')
  const store = await tx.objectStore('tickets')
  await store.delete(4)
  await tx.done
//
})();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      let i = 1;
      // setInterval(() => postMessage(i++), 1000);
      // fetch('index.js', {})

      // registration.pushManager.getSubscription()
      //   .then(subscription => {
      //     console.log(123, subscription);
      //   });
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
    navigator.serviceWorker.ready.then(sw => console.log(123, sw));
    navigator.serviceWorker.addEventListener('message', () => {
      console.log(123123);
    });
  });
}