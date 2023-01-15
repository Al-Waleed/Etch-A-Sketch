const container = document.getElementById("container");

const getGridsValue = document.getElementById("grids");
getGridsValue.addEventListener("change", () => createGrids(getGridsValue.value));
createGrids(8);
function createGrids(grid){
    container.innerHTML = ""
    container.style.setProperty('--grid-rows', grid);
    container.style.setProperty("--grid-cols", grid);
    for (i = 0; i < (grid * grid); i++){
        let div = document.createElement("div");
        container.appendChild(div).className = "grid";

        div.addEventListener("click", paint);
    };
};


function paint(e) {
    e.target.style.backgroundColor = 'blue';
    };
//const isClicked = document.getElementById(#grid)///////continue here
//if (isClicked === true){
//
//};

//container.addEventListener("onmousedown", function onclick(event) {
//    container.addEventListener("mouseover", () => { event.target.style.backgroundColor = "red" })
//    console.log(event.target);
//    //event.target.style.backgroundColor = "red";
//});

const backgroundColor = document.querySelector("#backgroundColor");

backgroundColor.addEventListener("change", () => {
    container.innerHTML = "";
    createGrids(getGridsValue.value);
    container.style.setProperty("--backgroundColor", backgroundColor.value);   
});

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => { // clear btn that empties the container and adds the chosen num of grids to it
    container.innerHTML = "";
    createGrids(getGridsValue.value);
});