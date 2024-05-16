// 🌟 13.2.2 Chaining Promises

fetch("http://localhost:3000/web").then((response) => {
  // When the promise resolves, we have status and headers
  if (response.ok) {
    const obj = JSON.parse();
    console.log(obj); // What can we do here? We don't actually have the response body yet.
  }
});
