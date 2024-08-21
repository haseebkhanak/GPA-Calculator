function cal() {
    var rows = document.querySelectorAll("tbody tr");
    var grades = 0;
    var credit = 0;

    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].querySelectorAll("td");

      var a = cells[1].querySelector("input").value;
      var b = cells[2].querySelector("select").value;

      if (b == "A") {
        b = 4;
      } else if (b == "A min") {
        b = 3.7;
      } else if (b == "B plus") {
        b = 3.3;
      } else if (b == "B") {
        b = 3;
      } else if (b == "B min") {
        b = 2.7;
      } else if (b == "C plus") {
        b = 2.3;
      } else if (b == "C") {
        b = 2;
      } else if (b == "C min") {
        b = 1.7;
      } else if (b == "D plus") {
        b = 1.3;
      } else if (b == "D") {
        b = 1;
      } else if (b == "D min") {
        b = 0.7;
      } else if (b == "F") {
        b = 0;
      }

      var z = a * b;
      grades += parseFloat(z);
      credit += parseInt(a);
    }

    var total = grades / credit;
    document.getElementById("Res").value = total.toFixed(2)+" GPA";

      if(b=="None"||a=="")
      {

          var div=document.createElement("div");
          div.className="alert alert-warning alert-dismissible"
          div.innerHTML=
          `<button class="btn-close" data-bs-dismiss="alert"></button>
           Error! Plz check your credentials`
           document.getElementById("two").appendChild(div)
      }
  
      if(total>=3)
      {
        document.getElementById("four").style.display="none"
        document.getElementById("three").style.display="block"
      }

      else if(total<=3)
      {
        document.getElementById("three").style.display="none"
        document.getElementById("four").style.display="block"
      }

  }

  function add() 
  {
    var table = document.createElement("tr");
    // table.className="table table-bordered";
    table.innerHTML = `
  <tr>
        <td><input type="text" class="form-control"></td>
        <td><input type="number" class="form-control"></td>
        <td>
            <select name="grades" class="form-select">
              <option value="None"></option>
                  <option value="A">A</option>
                  <option value="A min">A-</option>
                  <option value="B plus">B+</option>
                  <option value="B">B</option>
                  <option value="B min">B-</option>
                  <option value="C plus">C+</option>
                  <option value="C">C</option>
                  <option value="C min">C-</option>
                  <option value="D plus">D+</option>
                  <option value="D">D</option>
                  <option value="D min">D-</option>
                  <option value="F">F</option>
            </select>
        </td>
    </tr> `;
    document.getElementById("one").appendChild(table);
  }

//   function remo() 
//   {
//   const rows = document.querySelectorAll("tbody tr");

//   for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].getElementsByTagName("td");
//     cells[0].querySelector("input").value="";
//     cells[1].querySelector("input").value="";
//     cells[2].querySelector("select").value="";
//   }
// }

function remo()
{
const rows=document.querySelectorAll("tbody tr")
for(let i=0;i<rows.length;i++)
{
  const a=rows[i].getElementsByTagName("input");
  const b=rows[i].getElementsByTagName("select");

  for(let x=0;x<a.length;x++)
  {
    a[x].value=""
  }

  for(let k=0;k<b.length;k++)
  {
    b[k].value=""
  }
}
document.getElementById("Res").value=""
document.getElementById("three").style.display="none"
document.getElementById("four").style.display="none"
}

function del()
{

  const a=document.getElementById("one");
  a.removeChild(a.lastElementChild);

}