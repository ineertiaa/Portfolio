const currentYear = new Date().getFullYear();
const birthday = new Date(2013, 3, 3);

const age = currentYear - birthday.getFullYear();

let ageElement = document.getElementById("header").innerText = age + " Year old Game, Web and General Dev.";