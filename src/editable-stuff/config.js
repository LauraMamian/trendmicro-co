// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "RETO",
  middleName: "",
  lastName: " CPITS Colombia",
  message: "Integración con Docker y Kubernetes",
};

const about = {
  show: true,
  heading: ["Laura Andrea Mamián Cerón", "Carolina Mateus"],
  imageLink: [require("../editable-stuff/Laura/LauraMamian.jpeg"), require("../editable-stuff/Carolina/Carolina.jpg")],
  imageSize: 375,
  message:
    [
      "Soy estudiante de último semestre ingeniería electrónica y telecomunicaciones de la Universidad del Cauca. Me apasiona la tecnología y la programación, me gusta aprender cosas nuevas y me considero una persona responsable y comprometida con mis proyectos.",
      "Carolina" // ESTO LO TIENES QUE MODIFICAR, COLOCAS LO QUE QUIERAS
    ],
};

const repos = {
  show: true,
  heading: ["Proyectos realizados por Laura", "Proyectos realizados por Carolina"],
  gitHubUsername: ["LauraMamian", "carolinaMateus"],
  reposLength: 4,
  specificRepos: [],
};

export { navBar, mainBody, about, repos };
