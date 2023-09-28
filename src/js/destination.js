fetch("./js/data.json").then((response) => {
  response.json().then((info) => {
    const divPlanetas = document.querySelector("#divPlanetas");
    const planetas = divPlanetas.querySelectorAll("p");
    planetas.forEach((planeta) => {
      planeta.addEventListener("click", (event) => {
        planetas.forEach((planeta1) => {
          planeta1.classList.remove("border-b-2");
        });
        planeta.classList.add("border-b-2");
        planeta.classList.add("border-white");

        function descPlaneta(n) {
          document.getElementById("imgPlaneta").src =
            info.destinations[n].images.webp;
          document.getElementById("txtNome").innerText =
            info.destinations[n].name;
          document.getElementById("txtDesc").innerText =
            info.destinations[n].description;
          document.getElementById("txtDist").innerText =
            info.destinations[n].distance;
          document.getElementById("txtTime").innerText =
            info.destinations[n].travel;
        }
        if (event.target.id === "moon") {
          descPlaneta(0);
        } else if (event.target.id === "mars") {
          descPlaneta(1);
        } else if (event.target.id === "europa") {
          descPlaneta(2);
        } else if (event.target.id === "titan") {
          descPlaneta(3);
        }
      });
    });
  });
});
