"use strict";

var gl;
var positions = [];

window.onload = function init() {
  // Get the canvas from the HTML
  var canvas = document.getElementById("gl-canvas");
  gl = canvas.getContext("webgl2");
  // Check if the browser supports the WEBGL 2.0 or not
  if (!gl) alert("WebGL 2.0 isn't available");

  // Create a program with the WEBGL and add the vertex shader and the fragment shaders to it.
  var program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);

  const vertexData = new Float32Array([
    -0.5, -0.5, -0.5, 0, 1, 1, -0.5, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, -0.5, 0, 1,
    1, -0.5, -0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0.5, 0, 1, 1, -0.5, -0.5, -0.5, 0,
    1, 1,

    0.5, -0.5, -0.5, 1, 0, 1, 0.5, 0.5, -0.5, 1, 0, 1, 0.5, 0.5, 0.5, 1, 0, 1,
    0.5, 0.5, 0.5, 1, 0, 1, 0.5, -0.5, 0.5, 1, 0, 1, 0.5, -0.5, -0.5, 1, 0, 1,

    -0.5, -0.5, -0.5, 0, 1, 0, 0.5, -0.5, -0.5, 0, 1, 0, 0.5, -0.5, 0.5, 0, 1,
    0, 0.5, -0.5, 0.5, 0, 1, 0, -0.5, -0.5, 0.5, 0, 1, 0, -0.5, -0.5, -0.5, 0,
    1, 0,

    -0.5, 0.5, -0.5, 1, 1, 0, 0.5, 0.5, 0.5, 1, 1, 0, 0.5, 0.5, -0.5, 1, 1, 0,
    -0.5, 0.5, 0.5, 1, 1, 0, 0.5, 0.5, 0.5, 1, 1, 0, -0.5, 0.5, -0.5, 1, 1, 0,

    0.5, -0.5, -0.5, 0, 0, 1, -0.5, -0.5, -0.5, 0, 0, 1, 0.5, 0.5, -0.5, 0, 0,
    1, -0.5, 0.5, -0.5, 0, 0, 1, 0.5, 0.5, -0.5, 0, 0, 1, -0.5, -0.5, -0.5, 0,
    0, 1,

    -0.5, -0.5, 0.5, 1, 0, 0, 0.5, -0.5, 0.5, 1, 0, 0, 0.5, 0.5, 0.5, 1, 0, 0,
    0.5, 0.5, 0.5, 1, 0, 0, -0.5, 0.5, 0.5, 1, 0, 0, -0.5, -0.5, 0.5, 1, 0, 0,
  ]);

  const aPositionLoc = gl.getAttribLocation(program, "aPosition");
  const aColorLoc = gl.getAttribLocation(program, "aColor");
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
  gl.vertexAttribPointer(aPositionLoc, 3, gl.FLOAT, false, 24, 0);
  gl.vertexAttribPointer(aColorLoc, 3, gl.FLOAT, false, 24, 12);
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);

  const modelLoc = gl.getUniformLocation(program, "uModel");
  const viewLoc = gl.getUniformLocation(program, "uView");
  const projectionLoc = gl.getUniformLocation(program, "uProjection");

  let model = mat4();
  let view = mat4();
  let projection = mat4();

  view = lookAt(vec3(100, 100, 100), vec3(0, 0, 0), vec3(0, 1, 0));
  projection = perspective(
    Math.PI / 2,
    gl.canvas.width / gl.canvas.height,
    0,
    10
  );
  gl.uniformMatrix4fv(modelLoc, false, flatten(model));
  gl.uniformMatrix4fv(viewLoc, false, flatten(view));
  gl.uniformMatrix4fv(projectionLoc, false, flatten(projection));

  // Render the data points.
  const render = () => {
    requestAnimationFrame(render);
    // model=rotate(0.02)

    gl.drawArrays(gl.TRIANGLES, 0, 36);
  };
  render();
};
