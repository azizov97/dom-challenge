const tbl = document.getElementById("pixelBox");

function makeGrid() {
  for (let i = 0; i < 10; i++) {
    //row
    let myRow = document.createElement("tr");
    myRow.id = "row" + i;
    tbl.appendChild(myRow);
    let rowW = document.getElementById("row" + i);

    for (let j = 0; j < 10; j++) {
      //column
      let myCell = document.createElement("td");
      rowW.appendChild(myCell);
    }
  }
}
makeGrid();

pixelBox.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "dodgerblue";
});
