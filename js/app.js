function DodajPodatke()
{

var table=document.getElementById("tablicaPodataka");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  
cell1.innerHTML = document.getElementById("lPredmet").value;
cell2.innerHTML = document.getElementById("lsemestar").value;
cell3.innerHTML = document.getElementById("lEctsbodovi").value;
cell4.innerHTML = '<button onclick="SomeDeleteRowFunction(this)" class="fas fa-minus"></button> ';
cell5.innerHTML = '<input type="checkbox" id="myCheck" onclick="selectedRow()">';

}
function SomeDeleteRowFunction(rows)
{
var _row = rows.parentElement.parentElement;
  document.getElementById('tablicaPodataka').deleteRow(_row.rowIndex);
}


function selectedRow(){

                var index,
                    table = document.getElementById("tablicaPodataka");

                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                         // remove the background from the previous selected row
                        if(typeof index !== "undefined"){
                           table.rows[index].classList.toggle("selected");
                        }
                        console.log(typeof index);
                        // get the selected row index
                        index = this.rowIndex;
                        // add class selected to the row
                        this.classList.toggle("selected");
                        console.log(typeof index);
                     };
                }

            }
            selectedRow();