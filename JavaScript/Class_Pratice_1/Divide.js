var leftOperand = 77;
var rightOperand = 20 > 30;
var divEm = leftOperand / rightOperand;
var nada = 0 / 0;
document.write(divEm + '<p>' + nada + '</P>');
if (!isFinite(divEm)) {
  alert('Who Dude thats a big number');
}
if (isNaN(nada)) {
  alert('You are dividing nothing by nothing');
}
