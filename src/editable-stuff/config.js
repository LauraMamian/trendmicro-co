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
  message: "Implementación con Docker y Kubernetes",
  // icons: [
  //   {
  //     image: "fa-github",
  //     url: "https://github.com/LauraMamian",
  //   },
  //   {
  //     image: "fa-linkedin",
  //     url: "https://www.linkedin.com/in/lauramamianc",
  //   },
  // ],
};

const about = {
  show: true,
  heading: "Laura Andrea Mamián Cerón",
  imageLink: require("../editable-stuff/Laura/LauraMamian.jpeg"),
  imageSize: 375,
  message:
    "My name is Laura Mamián. I’m a Electronic and Telecommunication Student.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "LauraMamian",
  reposLength: 4,
  specificRepos: [],
};

export { navBar, mainBody, about, repos};
