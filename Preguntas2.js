const contenedor = document.getElementById("preguntas");


var corr = ['c', 'a', 'a', 'b', 'b', 'd', 'a', 'd', 'd', 'd'];
var niv = {2 : 'Bajo', 5 : 'Medio', 10: 'Avanzado'}
function fnc() { 
var aciertos = 0;
var radio_checked = -1;
for(var j = 0, rad = document.getElementsByTagName('input'); j < rad.length-1; j++){
if(rad[j].checked) {
radio_checked++;
if (rad[j].value == corr[radio_checked]) {
document.getElementById(rad[j].parentNode.id).style.backgroundColor = '#9BFFA0';
aciertos++;
} else {
document.getElementById(rad[j].parentNode.id).style.backgroundColor = '#FF8C8C';
}
}
}
document.getElementById('nivel').innerHTML = 'Nivel de Conocimiento: ' + niv[aciertos];
}

