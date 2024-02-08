let triSize = 20;   ///////////////////////////////////////////// YOU CAN CHANGE ////////////////////////////////////////////////////////////////////////////////////////////////
let triAmount = 4;  ///////////////////////////////////////////// DO NOT CHANGE /////////////////////////////////////////////////////////////////////////////////////////////////
let numRow = 4;     ///////////////////////////////////////////// DO NOT CHANGE /////////////////////////////////////////////////////////////////////////////////////////////////
let xOffset = 0;
let my =  Math.sqrt(Math.pow(triSize, 2) - Math.pow(triSize/2, 2));

let canvasX = triSize * (32 * 3);  ///////////////////////////////////////////// YOU CAN CHANGE ////////////////////////////////////////////////////////////////////////////////////////////////
let canvasY = my * (20 * 3);       ///////////////////////////////////////////// YOU CAN CHANGE ////////////////////////////////////////////////////////////////////////////////////////////////

// let colorList = ['black', 'white']
let colorArr = [[255,255,0,255],[0,255,255,255],[255,0,0,0],[0,0,255,0]]
let revColorArr = [[255,255,0,255],[255,0,255,255],[0,0,0,255],[0,255,0,0]]


function remake() {
  // reassign randomly the pattern arrays
  for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
      colorArr[i][j] = random(255);
    }
  }
  for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
      revColorArr[i][j] = random(255);
    }
  }
}

function setup() {
  createCanvas(canvasX, canvasY);
  noStroke()

  // reassign randomly the pattern arrays
  for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
      colorArr[i][j] = random(255);
    }
  }
  for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
      revColorArr[i][j] = random(255);
    }
  }
}
function drawTri(triSize, triAmount, numRow) {
  for (let i = 0; i < triAmount; i++){
    for (let j = 0; j < numRow; j++){
      // let col = random(colorList);
      // fill(col)
      fill(colorArr[i][j])
      triangle(0 + (triSize * i) - ((triSize/2) * j),
      my + (j * my),
      triSize/2 + (triSize * i) - ((triSize/2) * j),
      0 + (j * my), 
      triSize + (triSize * i) - ((triSize/2) * j), 
      my + (j * my))
    }
  }
};

function drawTriRev(triSize, triAmount, numRow) {
  for (let i = 0; i < triAmount; i++){
    for (let j = 0; j < numRow; j++){
      // let col = random(colorList);
      // fill(col)
      fill(revColorArr[i][j])
      triangle(triSize/2 + (triSize * i) - ((triSize/2) * j),
      0 + (j * my),
      triSize + (triSize * i) - ((triSize/2) * j),
      my + (j * my), 
      triSize/2 + triSize + (triSize * i) - ((triSize/2) * j), 
      0 + (j * my))
    }
  }
};

function patternTriFunc(){
  //upright triangles
  for (let i = 0; i < numRow; i++){
    drawTri(triSize, triAmount, numRow)
  };

  // translate(-triSize,0);

  //reverse triangles
  for (let i = 0; i < numRow; i++){
    drawTriRev(triSize, triAmount, numRow)
  };
};

function draw() {
  background(0);
  translate (xOffset, 0);
  xOffset -= 3;

  if (xOffset < (-3 * 52)){
    xOffset = 0;
  }

  patternN = 30; ///////////////////////////////////////////// YOU CAN CHANGE ////////////////////////////////////////////////////////////////////////////////////////////////

  translate(-triSize * 4, 0);
  translate(0, -my * 5);

  for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
      translate(0, my*4);

      for (let i = 0; i < patternN; i++){
        translate(triSize*4, 0);
        patternTriFunc();
  }
    }
    else{
      translate(0, my*4);

      for (let i = 0; i < patternN; i++){
        translate(-triSize*4, 0);
        patternTriFunc();
  };
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // noLoop();
  loop();
};

function keyPressed() {
  if (key === "s") {
      remake();
 }
}
