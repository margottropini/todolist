const list = document.getElementById("list");
const form = document.querySelector("form");
const item = document.getElementById("item");

// Ajouter les éléments a la todolist
form.addEventListener("submit", (e) => {
  // Quand je submit (entrée) je vais me récupérer un evenemnt
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`; // on va ajouter l'élément
  storage(); // a chaque fois que j'ajoute un elemnts j'le stock dans le localstorage

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
  storage(); // ici je réactualise le stockage
});

// Partie stockage

function storage() {
  window.localStorage.todoList = list.innerHTML;
}
function getValues() {
  let storageContent = window.localStorage.todoList;
  if (!storageContent) {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  } else {
    list.innerHTML = storageContent;
  }
}
getValues();
