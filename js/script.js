let couleur1 = document.getElementById('c1');
let couleur2 = document.getElementById('c2');
let couleur3 = document.getElementById('c3');
let couleur4 = document.getElementById('c4');
let btn1 = document.getElementById('btn');


btn1.addEventListener('click', actionB);

function change1() 
{
  couleur1.style.display="block";
  couleur2.style.display="none";
  couleur3.style.display="none";
  couleur4.style.display="none";
}