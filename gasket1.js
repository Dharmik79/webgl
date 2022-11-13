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

  const bufferData = new Float32Array([
    0, 0, 0, 1, 300, 1, 0, 0, 0.5, -0.8, 0, 1, 32, 0, 1, 0, -0.9, 0.5, 0, 1, 50,
    0, 0, 1,
  ]);
  const aPositionLoc = gl.getAttribLocation(program, "aPosition");
  const aPointSizeLoc = gl.getAttribLocation(program, "aPointSize");
  const aColorLoc = gl.getAttribLocation(program, "aColor");
  // To enable the vertex array
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aPointSizeLoc);
  gl.enableVertexAttribArray(aColorLoc);

  // Create a buffer to hold the data points
  const buffer = gl.createBuffer();
  // Binding the buffer to the program
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);

  gl.vertexAttribPointer(aPositionLoc, 4, gl.FLOAT, false, 4 * 8, 0);
  gl.vertexAttribPointer(aPointSizeLoc, 1, gl.FLOAT, false, 4 * 8, 4 * 4);
  gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 4 * 8, 4 * 5);
  // Render the data points.
  render();
};

function render() {
  // To draw the graphics on the page
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
