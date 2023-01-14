const container = document.getElementById("container");

const getGridsValue = document.getElementById("grids");
getGridsValue.addEventListener("change", () => createGrids(getGridsValue.value))

function createGrids(grid){
    container.style.setProperty('--grid-rows', grid);
    container.style.setProperty("--grid-cols", grid);
    for (i = 0; i < (grid * grid); i++){
        let div = document.createElement("div");
        container.appendChild(div).className = "grid";
    };
}



//const container = document.getElementById("container");























//const getGridsValue = document.querySelector("#grids")
//getGridsValue.addEventListener("change", () => { 
//
//    const grids = document.querySelector(".container")
//    console.log(getGridsValue.value)
//    for (let i = 0; i < getGridsValue.value ; i++) {
//        grids.innerHTML += "<div class='grid'>"   
//    }
//});