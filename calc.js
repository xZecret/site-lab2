"use strict";
window.onload = ButtonStart;

function ButtonStart(){
    var button = document.getElementById("addButton")
    button.onclick = Equality;
}

function Equality() {
    var a = Number(document.getElementById("val_a").value);
    var b = Number(document.getElementById("val_b").value);
    var c = Number(document.getElementById("val_c").value);
    var x1, x2;
    if (a == 0){
      alert("Введено неверное значение для a");
    }
    else{
      var d = a * a - 4 * b * c;
      if (d > 0){
        x1 = (-b + Math.sqrt(d))/(2 * a);
        x2 = (-b - Math.sqrt(d))/(2 * a);
        alert(`Значение переменной x1 = ${x1},
Значение переменной x2 = ${x2}`)
      }
      else if (d == 0) {
        x1 = Math.sqrt(d)/(2*a);
        alert(`Значение переменной x1, x2 = ${x1},`)
      }
      else{
        alert(`Уравнение не имеет действительных корней`)
      }
    }
}
