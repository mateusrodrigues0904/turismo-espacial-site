fetch("./js/data.json").then((response) => {
  response.json().then((info) => {
    const technologys = document.querySelector("#divTechs");
    const technology = technologys.querySelectorAll("div");
    technology.forEach((dispositivo) => {
      dispositivo.addEventListener("click", (event) => {
        technology.forEach((dispositivo1) => {
          dispositivo1.classList.remove("bg-white");
          dispositivo1.classList.add("bg-transparent");
          dispositivo1.classList.remove("text-black");
          dispositivo1.classList.add("text-white");
          dispositivo1.classList.add("border-grayC");
        });
        dispositivo.classList.add("bg-white");
        dispositivo.classList.add("text-black");
        dispositivo.classList.remove("border-grayC");
        function descTech(n) {
          document.getElementById("imgTech").src =
            info.technology[n].images.landscape;
          document.getElementById("txtTechName").innerText =
            info.technology[n].name;
          document.getElementById("txtTechDesc").innerText =
            info.technology[n].description;
        }
        if (event.target.id === "tech1") {
          descTech(0);
        } else if (event.target.id === "tech2") {
          descTech(1);
        } else if (event.target.id === "tech3") {
          descTech(2);
        }
      });
    });
  });
});
