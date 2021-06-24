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
isoBtn.addEventListener("click", (e) => new Triangle());

class Shape {
  constructor() {
    this.div = document.createElement("div");
    this.div.addEventListener("dblclick", () => this.div.remove());
    this.div.classList.add("shape");
    shapeContainer.appendChild(this.div);
    this.describe();
  }
  randomNum() {
    this.div.style.left = `${Math.floor(Math.random() * 601)}px`;
    this.div.style.top = `${Math.floor(Math.random() * 601)}px`;
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
    info1.innerText = "Rectangle";
    info2.innerText = `${rectInput2.value}px`;
    info3.innerText = `${rectInput1.value}px`;
    info4.innerText = "NA";
    info5.innerText =`${Math.floor( `${rectInput1.value}` * `${rectInput2.value}`)} px`;
    info6.innerText = `${Math.floor(2*`${rectInput1.value}` + `${rectInput2.value}`*2)} px`;
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.div.style.height = `${sqHeightInput.value}px`;
    this.div.style.width = `${sqHeightInput.value}px`;
    this.div.style.backgroundColor = randomColor();
    this.randomNum();
    shapeContainer.appendChild(this.div);
  }
  describe() {
    info1.innerText = "Square";
    info3.innerText = `${sqHeightInput.value}px`;
    info2.innerText = `${sqHeightInput.value}px`;
    info4.innerText = "NA";
    info5.innerText = `${Math.floor(`${sqHeightInput.value}` * `${sqHeightInput.value}`)} px`;
    info6.innerText = `${Math.floor(
      `${sqHeightInput.value}` * 4)} px`;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.div.style.height = `${cirRadInput.value}px`;
    this.div.style.width = `${cirRadInput.value}px`;
    this.div.style.backgroundColor = randomColor();
    this.div.classList.add("circle");
    this.randomNum();
    shapeContainer.appendChild(this.div);
  }
  describe() {
    info1.innerText = "Circle";
    info3.innerText = `${cirRadInput.value}px`;
    info2.innerText = `${cirRadInput.value}px`;
    info4.innerText = `${cirRadInput.value}px`;
    info5.innerText = `${Math.PI * Math.pow(cirRadInput.value, 2)}px`;
    info6.innerText = `${Math.floor(`${cirRadInput.value}` * `${cirRadInput.value}` * 2)} px`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    this.div.style.borderRight = `${IsoHeightInput.value / 2}px solid transparent`;
    this.div.style.borderLeft = `${IsoHeightInput.value / 2}px solid transparent`;
    this.div.style.borderBottom = `${IsoHeightInput.value / 2}px solid ${randomColor()}`;

    this.div.classList.add("Triangle");
    this.randomNum();
    shapeContainer.appendChild(this.div);
  }
  describe() {
    info1.innerText = "Triangle";
    info2.innerText = `${IsoHeightInput.value}px`;
    info3.innerText = `${IsoHeightInput.value / 2}px`;
    info4.innerText = "NA";
    info5.innerText = `${Math.floor(`${IsoHeightInput.value}` * `${IsoHeightInput.value}`)} px`;
    info6.innerText = `${Math.floor(`${IsoHeightInput.value}` * `${IsoHeightInput.value}` * 2)} px`;
  }
}
