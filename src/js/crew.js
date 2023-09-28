fetch("./js/data.json").then((response) => {
  response.json().then((info) => {
    const crew = document.querySelector("#crewOpt");
    const crewPessoas = crew.querySelectorAll("div");

    crewPessoas.forEach((pessoa) => {
      pessoa.addEventListener("click", (event) => {
        crewPessoas.forEach((pessoa1) => {
          pessoa1.classList.remove("bg-white");
          pessoa1.classList.add("bg-grayC");
        });
        pessoa.classList.add("bg-white");
        function descCrew(n) {
          document.getElementById("imgCrew").src = info.crew[n].images.webp;
          document.getElementById("txtRole").innerText = info.crew[n].role;
          document.getElementById("txtName").innerText = info.crew[n].name;
          document.getElementById("txtBio").innerText = info.crew[n].bio;
        }
        if (event.target.id === "crew1") {
          descCrew(0);
        } else if (event.target.id === "crew2") {
          descCrew(1);
        } else if (event.target.id === "crew3") {
          descCrew(2);
        } else if (event.target.id === "crew4") {
          descCrew(3);
        }
      });
    });
  });
});
