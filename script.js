const list = document.getElementById("list");
const form = document.querySelector("form");
const item = document.getElementById("item");

// Ajouter les éléments a la todolist
form.addEventListener("submit", (e) => {
  // Quand je submit (entrée) je vais me récupérer un evenemnt
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`; // on va ajouter l'élément

  item.value = ""; // me permettra de vider la zone de saisie quand j'aurai validé
});

// ENlever les elements

// Quand je click sur un elmnt on stock dans event
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    // si ce qui est clické a une classlist checked
    e.target.remove(); // alors on supprime l'element cliqué
  } else {
    // SI il a pas la class checkecd alors on lui met et le  SASS changera l'icone :) !!
    e.target.classList.add("checked");
  }
});

// Partie stockage

function storage() {
  window.localStorage.todoList = list.innerHTML;
}
