let couleur1H = document.getElementById('ch1');
let couleur2H = document.getElementById('ch2');

let couleur1B = document.getElementById('cmb1');
let couleur2B = document.getElementById('cmb2');

let couleurP1 = document.getElementById('cp1');
let couleurP2 = document.getElementById('cp2');

let acceuil = document.getElementById('acceuil');
let ContainerPage = document.getElementById('container');

let btn1A = document.getElementById('btnC1');
let btn2A = document.getElementById('btnC2');
let btn1B = document.getElementById('btnCb1');
let btn2B = document.getElementById('btnCb2');
let btn1C = document.getElementById('btnPc1');
let btn2C = document.getElementById('btnPc2');
let BtnStart = document.getElementById('StartChoix');

btn1A.addEventListener('click', changeH1);
btn2A.addEventListener('click', changeH2);
btn1B.addEventListener('click', changeB1);
btn2B.addEventListener('click', changeB2);
btn1C.addEventListener('click', changeP1);
btn2C.addEventListener('click', changeP2);
BtnStart.addEventListener('click', pageA);
function changeH1() 
{
  couleur1H.style.display="block";
  couleur2H.style.display="none";
    
}
function changeH2() 
{
  couleur1H.style.display="none";
  couleur2H.style.display="block";
  
}
function changeB1() 
{
  couleur1B.style.display="block";
  couleur2B.style.display="none";
}
function changeB2() 
{
  couleur1B.style.display="none";
  couleur2B.style.display="block";
    
}

function changeP1() 
{
    couleurP1.style.display="block";
    couleurP2.style.display="none";
}
function changeP2() 
{
    couleurP1.style.display="none";
    couleurP2.style.display="block";
}
function pageA() 
{
    acceuil.style.display="none";
    ContainerPage.style.display="flex";
}