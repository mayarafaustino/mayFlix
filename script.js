const liClasse = "liClasse";

// ------------ Filmes -----------------
const ulFilmes = document.querySelector('[data-listaFilmes]');
var listaFilmes = [
	"https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg",
	"https://occ-0-299-300.1.nflxso.net/art/f552e/589ce114446f532d48d199df4dc15ce7fdcf552e.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Her.jpg/220px-Her.jpg", "https://static.digit.in/OTT/v2/images/about-time-319023.jpg", "https://d1w8cc2yygc27j.cloudfront.net/-830323696325605543/6883735179626666862.jpg", "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f1f881062c7307c1f1c289ef5df5ee7e650214ec7e03deced3cf9c19e1c2ac25._RI_V_TTW_.jpg"
];
var listaTituloFilmes = ["Arrival", "Carol", "Her", "About Time", "The Sixty Sense", "Interestelar"];


for (var i = 0; i < listaFilmes.length; i++) {
	ulFilmes.innerHTML = ulFilmes.innerHTML + "<li class=" + liClasse + "><img src=" + listaFilmes[i] + "><p>" + listaTituloFilmes[i] + "</p></li>";
}


// ------------ Séries -----------------
const ulSeries = document.querySelector('[data-listaSeries]');


var listaSeries = [
	"https://br.web.img2.acsta.net/c_310_420/pictures/16/06/09/17/38/353737.jpg",
	"https://br.web.img2.acsta.net/pictures/19/05/07/14/27/4051507.jpg"
];
var listaTituloSeries = ["Orphan Black", "Fleabag"];

for (var i = 0; i < listaSeries.length; i++) {
	ulSeries.innerHTML = ulSeries.innerHTML + "<li class=" + liClasse + "><img src=" + listaSeries[i] + "><p>" + listaTituloSeries[i] + "</p></li>";
}