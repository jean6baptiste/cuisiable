let couleur1 = document.getElementById('c1');
let couleur2 = document.getElementById('c2');
let couleur3 = document.getElementById('c3');
let couleur4 = document.getElementById('c4');
let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('btn1');
let btn3 = document.getElementById('btn2');
let btn4 = document.getElementById('btn3');


btn1.addEventListener('click', change1);
btn2.addEventListener('click', change2);
btn3.addEventListener('click', change3);
btn4.addEventListener('click', change4);


function change1() 
{
  couleur1.style.display="block";
  couleur2.style.display="none";
  couleur3.style.display="none";
  couleur4.style.display="none";
}

function change2() 
{
  couleur1.style.display="none";
  couleur2.style.display="block";
  couleur3.style.display="none";
  couleur4.style.display="none";
}

function change3() 
{
  couleur1.style.display="none";
  couleur2.style.display="none";
  couleur3.style.display="block";
  couleur4.style.display="none";
}

function change4() 
{
  couleur1.style.display="none";
  couleur2.style.display="none";
  couleur3.style.display="none";
  couleur4.style.display="block";
}
