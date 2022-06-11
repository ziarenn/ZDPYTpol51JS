export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  // stworz element h2 i nadaj atrybuty
  const h2 = document.createElement("h2");
  h2.textContent = "About us";
  h2.setAttribute("id", "about-heading");

  // stworz element p i nadaj atrybuty
  const p = document.createElement("p");
  p.textContent = "THIS IS SIMPLE PAGE...";
  p.classList.add("about-p");
  //   p.setAttribute('class', 'about-p')

  // stworz button i nadaj atrybuty
  const button = document.createElement("button");
  button.setAttribute("id", "about-button");
  button.textContent = "Change color";

  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
  contentContainer.appendChild(button);

  const buttonInDOM = document.getElementById("about-button");

  buttonInDOM.addEventListener("click", function () {
    const pInDOM = document.querySelector(".about-p");
    pInDOM.classList.toggle("paragraph");
  });
}
