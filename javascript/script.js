document.getElementById("gameSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const name = document.getElementById("gameInput").value;
  if (name === "")
  return;
  const url = "https://zelda-api.apius.cc/api/games?name=" + name;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
    });


  document.getElementById("gameResults").innerHTML = results;
  });
