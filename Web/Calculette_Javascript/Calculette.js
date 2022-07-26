const btns = document.querySelectorAll(".btn");
const res = document.querySelector("h3");
// const Cl = document.querySelector("#C");
// const eq = document.querySelector("#eq");
// console.log(btns);
res.textContent = "";

C.addEventListener("click", () => {
  res.textContent = "";
});
btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    // console.log(e.target.id);
    res.textContent += e.target.id;
    // console.log(res.textContent);
  });
});

eq.addEventListener("click", () => {
  //   console.log(res.textContent);
  res.textContent = eval(res.textContent);
});

// Gestion des multiplicateur à faire: 9-*/=?
// réation du bouton Ce pour effacer la dernière touche
window.open("//Google.fr", "recherche", "height=400", "width=400");
close("//Google.fr", "recherche", "height=400", "width=400");
confirm("ah bon?");
let Age = 0;
Age = prompt("Quel age avez-vous?");
confirm("Confirmer votre age svp. Vs avez vraiment " + Age + "ans ?");
// console.log(navigator.userAgent);3
window.history.back();
console.log(history.back);
history.go(-2);
