let a = 1;
//Création du compteur
const compteur = document.createElement("span");
document.body.appendChild(compteur);
compteur.classList.add("compteur");
compteur.style.fontSize = "10rem";
compteur.style.color = "grey";
compteur.style.textAlign = "center";

function bulleGenerator() {
  //Propriétés d'une bulle
  console.log("Création d'une bulle");
  const rond2 = document.createElement("span");
  rond2.classList.add("rond2");
  document.body.appendChild(rond2);
  let taille = Math.random() * 300 + 50 + "px";
  rond2.style.height = taille;
  rond2.style.width = taille;
  rond2.style.left = Math.random() * 100 + "%";
  rond2.style.setProperty("--c", Math.random() * 100 + "%");

  //Supression de la bulle quand l'utilisateur l'a loopé
  setTimeout(() => {
    rond2.remove();
  }, 4000);

  //Evenement click
  rond2.addEventListener("click", (e) => {
    console.log("L'utilisateur a cliqué sur une bulle");

    //On compte le nombre de bulles qu'a touché l'utilisateur
    compteur.textContent = a;
    a++;

    //destruction de la bulle sur lequel l'utilisateur a cliqué
    rond2.remove();
  });
}

//Création d'une bulle chaque secondes
setInterval(bulleGenerator, 700);
