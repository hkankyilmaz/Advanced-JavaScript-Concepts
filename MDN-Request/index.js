const request = new Request("https://jsonplaceholder.typicode.com/todos/1", {
  headers: {
    "Cache-Control": "no-store",
  },
});

fetch(request)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    document.getElementById("main").innerText = res.title;
  });
