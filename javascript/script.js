document.getElementById("gameSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("gameInput").name;
  if (name === "")
  return;
  const url = "https://docs.zelda-api.apius.cc/api/" + name +"?";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      }


  document.getElementById("gameResults").innerHTML = results;
  });
