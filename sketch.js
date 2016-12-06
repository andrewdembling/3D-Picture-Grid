var xoff = 0;
var capture;

function setup() {
  createCanvas(640, 480, WEBGL);
  
  ortho(-width/2, width/2, height/2, -height/2, 0, 500);

  capture = createCapture(VIDEO);
  capture.size(320, 240);
}

function draw() {
  background(0);
  
  xoff += 0.01;
  var n = noise(xoff)
  var r = map(n, 0, 1, 0, 100);
  var rot = map(n, 0, 1, 0, 360)/10;
  capture.loadPixels();
  texture(capture);

orbitControl();
for(var i = -5; i < 5; i++){
    for(var j = -5; j < 5; j++){
      for(var k =-5; k<5; k++){
      push();
      translate(i*160, k*160, j*160);
      box(r,r,r);
      pop();
      
      push();
      translate(i*120*n, k*120*n, j*120*n);
      rotateX(-rot*2);
      rotateY(rot);
      rotateZ(-rot);
      sphere(r/2);
      pop();
    }
  }
}
rotateX(map(mouseX,0,width,0,360)/100);
rotateY(map(mouseY,0,height,0,360)/100);
rotateZ(rot);
torus(r*8,r*2);

rotateX((map(mouseX,0,width,0,360)/100)+180);
rotateY((map(mouseY,0,height,0,360)/100)+180);
rotateZ(rot+180);
torus(r*8,r*2);
}