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

  const bufferData = new Float32Array([0, 0,0,1, 300]);
  const aPositionLoc = gl.getAttribLocation(program, "aPosition");
  const aPointSizeLoc = gl.getAttribLocation(program, "aPointSize");

  // To enable the vertex array
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aPointSizeLoc);


  // Create a buffer to hold the data points
  const buffer = gl.createBuffer();
  // Binding the buffer to the program
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);

  gl.vertexAttribPointer(aPositionLoc, 4, gl.FLOAT, false, 4 * 5, 0);
  gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 4 * 5, 4 * 4);

  // Render the data points.
  render();
};

function render() {
  // To draw the graphics on the page
  gl.drawArrays(gl.POINTS, 0, 1);
}
