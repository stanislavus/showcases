self.onmessage = event => {
  console.log('Hello from Web Worker', event.data);
  self.postMessage(Math.random() > 0.5 ? event.data + 100 : event.data * 100, null);
};