document.addEventListener("DOMContentLoaded", setup);

function setup() {

  var a = document.getElementById("a");
  a.addEventListener("mouseover", sicht);
  a.addEventListener("mouseleave", sicht1);
  var b = document.getElementById("b");
  b.addEventListener("mouseover", sichtb);
  b.addEventListener("mouseleave", sichtb1);

/*  var a1 = document.getElementById("teilung");
  a1.addEventListener("mouseover", sicht);
  a1.addEventListener("mouseleave", sicht1);*/
  var a1 = document.getElementById("aa");
  a1.addEventListener("mouseover", sicht);
  a1.addEventListener("mouseleave", sicht1);

  var b1 = document.getElementById("bb");
  b1.addEventListener("mouseover", sichtb);
  b1.addEventListener("mouseleave", sichtb1);
}
/*
function sicht() {
    teilung.style.visibility="visible";
}

function sicht1() {
    teilung.style.visibility="hidden";
}*/
function sicht() {
    aa.style.visibility="visible";
}

function sicht1() {
    aa.style.visibility="hidden";
}
function sichtb() {
    bb.style.visibility="visible";
}

function sichtb1() {
    bb.style.visibility="hidden";
}
