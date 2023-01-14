const container = document.getElementById("container");

const getGridsValue = document.getElementById("grids");
getGridsValue.addEventListener("change", () => createGrids(getGridsValue.value))
createGrids(8)
function createGrids(grid){
    container.innerHTML = ""
    container.style.setProperty('--grid-rows', grid);
    container.style.setProperty("--grid-cols", grid);
    for (i = 0; i < (grid * grid); i++){
        let div = document.createElement("div");
        container.appendChild(div).className = "grid";
        div.addEventListener("mouseover", paint);
    };
}

function paint(e) {
    e.target.style.backgroundColor = 'black';
  }

