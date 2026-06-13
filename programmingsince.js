const startDate = new Date(2025, 6, 1); 

const now = new Date();

let difference = now - startDate;

const days = Math.floor(difference / (1000 * 60 * 60 * 24));

const display = document.getElementById("programming-since").innerHTML = `Programming passionately since <span class="highlightedsubtext">${days}</span> days ago.`;