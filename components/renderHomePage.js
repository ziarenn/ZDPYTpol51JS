export default function () {
  // klasa content
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "home-heading");
  h2.textContent = "Welcome to our page!";

  const p = document.createElement("p");
  p.setAttribute("id", "home-p");
  p.textContent = "Lorem ipsum dolor sit amet.";

  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
}
