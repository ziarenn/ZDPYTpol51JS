// ZAD 1

// import renderAboutPage from "./components/renderAboutPage.js";
// import renderHomePage from "./components/renderHomePage.js";

// // selecting the content container
// const contentContainer = document.querySelector(".content");

// // selecting nav buttons
// const homeButton = document.getElementById("home-anchor");
// const aboutButton = document.getElementById("about-anchor");

// const mainHeading = document.getElementById("main-heading");

// homeButton.addEventListener("click", function () {
//   console.log("Home button clicked");
//   //   mainHeading.classList.toggle("heading");
//   renderHomePage();
// });

// aboutButton.addEventListener("click", function () {
//   renderAboutPage();
// });

// AJAX
const contentContainer = document.querySelector(".content");
// otwarcie requesta, wezwanie do siebie posłańca
const request = new XMLHttpRequest();

// // powiadomienie posłańca co ma zrobić, ma zabrać z podanego adresu jakieś dane
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

// wysłanie posłańca w podróż
request.send();

// oczekiwanie na powrót posłańca
request.addEventListener("load", function () {
  // posłaniec przynosi nam dane w paczce, a my ją musimy tu rozpakować
  console.log(this.responseText);
  // kowersja json na js
  const parsed = JSON.parse(this.responseText);
  console.log(parsed);
  const backToJSON = JSON.stringify(parsed);
  console.log(backToJSON);
  //wyświetlenie danych
  const p = document.createElement("p");
  p.textContent = `User id: ${parsed.userId}, id: ${parsed.id}, title: ${parsed.title}, completed: ${parsed.completed}`;
  contentContainer.appendChild(p);
});
// this (js) == self (python)

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {

//     return response.json();
//     // metoda .json() == kowersja z readable stream na js
//   })
//   .then(function (data) {
//     // w tym thenie mamy juz dostep do normalnych danych, tj. jsowy obiekt
//     console.log(data);
//   });

// // 200 - wszystko ok
// // 403 - wadliwy url/ ban na api
// // 404 - całkowita utrata połączenia z api
