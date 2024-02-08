function setup() {
  createCanvas(57 * 25, 56 * 15);
}

function drawTriRow(repNum, incX, incY, row){
  let offset = 915 

  for (let i = 0; i < repNum; i++){
      let bnw = ['white', 'black']
      let color = random(bnw)
      if (color == 'white'){
        noStroke()
        fill(color);
        triangle(30 - offset + (incX * i) + (row * (incX/2)), // x1
        75 - offset + (incY * row), // y1
        58 - offset + (incX * i) + (row * (incX/2)), // x2
        20 - offset + (incY * row), //y2
        86 - offset + (incX * i) + (row * (incX/2)), // x3
        75 - offset + (incY * row)) // y3
      }
      else {
        stroke(0);
        fill(color);
        triangle(30 - offset + (incX * i) + (row * (incX/2)), // x1
        75 - offset + (incY * row), // y1
        58 - offset + (incX * i) + (row * (incX/2)), // x2
        20 - offset + (incY * row), //y2
        86 - offset + (incX * i) + (row * (incX/2)), // x3
        75 - offset + (incY * row)) // y3
      }
      
    }
}

function drawTriRowRev(repNum, incX, incY, row){
  let offset = 915 

  for (let i = 0; i < repNum; i++){
      let bnw = ['white', 'black']
      let color = random(bnw)
      if (color == 'white'){
        noStroke()
        fill(color);
        triangle(58 - offset + (incX * i) + (row * (incX/2)), // x1
        20 - offset + (incY * row), // y1
        86 - offset + (incX * i) + (row * (incX/2)), // x2
        75 - offset + (incY * row), //y2
        114 - offset + (incX * i) + (row * (incX/2)), // x3
        20 - offset + (incY * row)) // y3
      }
      else {
        stroke(0);
        fill(color);
        triangle(58 - offset + (incX * i) + (row * (incX/2)), // x1
        20 - offset + (incY * row), // y1
        86 - offset + (incX * i) + (row * (incX/2)), // x2
        75 - offset + (incY * row), //y2
        114 - offset + (incX * i) + (row * (incX/2)), // x3
        20 - offset + (incY * row)) // y3
      }
      
    }
}


function draw() {
  background(255);
  
  let incX = 57
  let incY = 56

  let repNum = 90
  
  for(let i = 0; i < repNum; i++){
    drawTriRow(repNum, incX, incY, i)
    drawTriRowRev(repNum, incX, incY, i)
  }
  noLoop();
}
