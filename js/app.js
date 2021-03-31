function DodajPodatke()
{

var table=document.getElementById("tablicaPodataka");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
cell1.innerHTML = document.getElementById("lPredmet").value;
cell2.innerHTML = document.getElementById("lsemestar").value;
cell3.innerHTML = document.getElementById("lEctsbodovi").value;
cell4.innerHTML = '<button onclick="SomeDeleteRowFunction(this)"><img class="slike" src="images/delete.png"></button> ';

}
function SomeDeleteRowFunction(rows)
{
var _row = rows.parentElement.parentElement;
  document.getElementById('tablicaPodataka').deleteRow(_row.rowIndex);
}
