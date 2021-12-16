function fetchMe(data) {
  let newData = fetch(data)
    .then((res) => res.json())
    .then((data) => console.log(data));
  return newData;
}

fetchMe("https://api.publicapis.org/entries");
// fetch("https://api.publicapis.org/entries", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "User 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error"));
