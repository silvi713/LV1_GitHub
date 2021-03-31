function DodajPodatke()
{
	var sPredmet=document.getElementById("lPredmet");
	var sSemestar=document.getElementById("lsemestar");
	var sBododvi=document.getElementById("lEctsbodovi");

	var oTablica=document.getElementById('#tablicaPodataka');
	var row = oTablica.insertRow(0);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
// Add some text to the new cells:
cell1.innerHTML = document.getElementById("lPredmet").text;
cell2.innerHTML = document.getElementById("lsemestar").text;
cell3.innerHTML = document.getElementById("lEctsbodovi").text;


}