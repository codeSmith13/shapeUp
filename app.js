// Buttons
let rectBtn = document.getElementById("rectBtn");
let squareBtn = document.getElementById("squareBtn");
let cirBtn = document.getElementById("cirBtn");
let isoBtn = document.getElementById("isoBtn");
// Input
let rectInput1 = document.getElementById("rectInput1");
let rectInput2 = document.getElementById("rectInput2");
let sqHeightInput = document.getElementById("sqHeightInput");
let cirRadInput = document.getElementById("cirRadInput");
let IsoHeightInput = document.getElementById("IsoHeightInput");

// Shape Info
let shapeInfo = document.getElementById("shapeInfo");
let widthInfo = document.getElementById("widthInfo");
let heightInfo = document.getElementById("heightInfo");
let radiusInfo = document.getElementById("radiusInfo");
let areaInfo = document.getElementById("areaInfo");
let perimeterInfo = document.getElementById("perimeterInfo");

// Shape Container
let shapeContainer = document.getElementById("shapeContainer");
// Shape array
let shapeArr = [];

let randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
// let randomNum = () => Math.floor(Math.random() * 600 + 1);

  
 

rectBtn.addEventListener("click", (e) => new Rectangle());
squareBtn.addEventListener("click", (e) => new Square());
cirBtn.addEventListener("click", (e) => new Circle());
isoBtn.addEventListener("click", (e) => new Triangle ());

class Shape {
  constructor() {
    this.div = document.createElement("div");
    this.div.addEventListener("dblclick", () => this.div.remove());
    this.div.classList.add("shape");
    shapeContainer.appendChild(this.div);
    this.describe();
  }
  randomNum() {
    this.div.style.left = `${Math.floor(Math.random() * 600)}px`;
    this.div.style.top = `${Math.floor(Math.random() * 600)}px`;
  }

 
}
        
        
    
class Rectangle extends Shape {
  constructor() {
    super();
    this.div.name = "Rectangle";
    this.div.style.height = `${rectInput1.value}px`;
    this.div.style.width = `${rectInput2.value}px`;
    this.div.style.backgroundColor = randomColor();
    shapeContainer.appendChild(this.div);
    this.randomNum();
    
    
  }
  describe() {
    shapeInfo.innerText = "Rectangle";
    heightInfo.innerText = `${rectInput1.value}px`;
    widthInfo.innerText = `${rectInput2.value}px`;
    radiusInfo.innerText = "NA";
    areaInfo.innerText =`${Math.floor( `${rectInput1.value}` * `${rectInput2.value}`)} px`;
    perimeterInfo.innerText = `${Math.floor(`${rectInput1.value}` * `${rectInput2.value}`*2)} px`;
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.div.id = "Square";
    this.div.style.height = `${sqHeightInput.value}px`;
    this.div.style.width = `${sqHeightInput.value}px`;
    this.div.style.backgroundColor = randomColor();
    this.randomNum();
    shapeContainer.appendChild(this.div);
  }
  describe() {
    shapeInfo.innerText = "Square";
    heightInfo.innerText = `${sqHeightInput.value}px`;
    widthInfo.innerText = `${sqHeightInput.value}px`;
    radiusInfo.innerText = "NA";
    areaInfo.innerText = `${Math.floor(`${sqHeightInput.value}` * `${sqHeightInput.value}`)} px`;
    perimeterInfo.innerText = `${Math.floor(`${sqHeightInput.value}` * `${sqHeightInput.value}` * 2)} px`;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.div.id = "Circle";
    this.div.style.height = `${cirRadInput.value}px`;
    this.div.style.width = `${cirRadInput.value}px`;
    this.div.style.backgroundColor = randomColor();
    this.randomNum();
    this.div.classList.add("circle");
    shapeContainer.appendChild(this.div);
  }
  describe() {
    shapeInfo.innerText = "Square";
    heightInfo.innerText = `${cirRadInput.value}px`;
    widthInfo.innerText = `${cirRadInput.value}px`;
    radiusInfo.innerText = "NA";
    areaInfo.innerText = `${Math.floor(`${cirRadInput.value}` * `${cirRadInput.value}`)} px`;
    perimeterInfo.innerText = `${Math.floor(`${cirRadInput.value}` * `${cirRadInput.value}` * 2)} px`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    this.div.id = "Triangle";
    this.div.style.height = 0;
    this.div.style.width = 0;
    this.div.style.borderWidth = `0 ${this.width}px solid ${this.height}px solid ${this.height}px solid`;
    // this.div.style.borderRightWidth = `${IsoHeightInput.value}px`;
    this.div.style.backgroundColor = randomColor();
    this.randomNum();
    this.div.classList.add("triangle");  
         shapeContainer.appendChild(this.div);;
  }
}
