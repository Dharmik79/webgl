"use strict";

var gl;
var positions = [];

var numPositions = 5000;

window.onload = function init() {
  // Get the canvas from the HTML
  var canvas = document.getElementById("gl-canvas");
  gl = canvas.getContext("webgl2");
  // Check if the browser supports the WEBGL 2.0 or not
  if (!gl) alert("WebGL 2.0 isn't available");

  // Create a program with the WEBGL and add the vertex shader and the fragment shaders to it.
  var program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);

  const arrayVertexData = new Float32Array([
    0,0,				1,0,0,
    0.00000,1.00000,	1,0,0,
    0.95106,0.30902,	1,0,0,
  
    0,0,				0,1,0,
    0.95106,0.30902,	0,1,0,
    0.58779,-.80902,	0,1,0,
  
    0,0,				0,0,1,
    0.58779,-.80902,	0,0,1,
    -.58779,-.80902,	0,0,1,
  
    0,0,				1,1,0,
    -.58779,-.80902,	1,1,0,
    -.95106,0.30902,	1,1,0,
  
    0,0,				1,0,1,
    -.95106,0.30902,	1,0,1,
    0.00000,1.00000,	1,0,1,
  ]);
  
  const elementVertexData = new Float32Array([
    0,0,				0,0,0,
    0.00000,1.00000,	1,0,0,
    0.95106,0.30902,	0,1,0,
    0.58779,-.80902,	0,0,1,
    -.58779,-.80902,	1,1,0,
    -.95106,0.30902,	1,0,1,
  ]);
  
  const elementIndexData = new Uint8Array([
    0,1,2,
    0,2,3,
    0,3,4,
    0,4,5,
    0,5,1,
  ]);
  const aPositionLoc=gl.getAttribLocation(program,"aPosition");
  const aColorLoc=gl.getAttribLocation(program,"aColor");

  const arrayVertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, arrayVertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, arrayVertexData, gl.STATIC_DRAW);
  
  // const elementVertexBuffer = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, elementVertexBuffer);
  // gl.bufferData(gl.ARRAY_BUFFER, elementVertexData, gl.STATIC_DRAW);
  
  // const elementIndexBuffer = gl.createBuffer();
  // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementIndexBuffer);
  // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementIndexData, gl.STATIC_DRAW);

  gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 5*4, 0);
  gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 5*4, 2*4);
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);
  // Render the data points.
  render();
};

function render() {
  // To draw the graphics on the page
   gl.drawArrays(gl.TRIANGLES, 0, 15);

// gl.drawElements(gl.TRIANGLES,15,gl.UNSIGNED_BYTE,0)
}
