function fetchWithTimeout(url, ms) {
  let timerId;
  const timeout = new Promise((_, reject) => {
    timerId = setTimeout(() => reject(new Error("Request Timed Out")), ms);
  });
  return Promise.race([fetch(url), timeout]).finally(() => clearTimeout(timerId));
}
async function run() {
  try {
    const res = await fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 5000);
    console.log("Success! Status:", res.status);
  } catch (err) {
    console.log("Failed:", err.message);
  }

  try {
    await fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1); // 1ms is too short
  } catch (err) {
    console.log("Failed:", err.message); // Request Timed Out
  }
}

run();