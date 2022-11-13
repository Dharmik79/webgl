"use strict";

var gl;
var positions =[];

var numPositions = 5000;

window.onload = function init()
{
    // Get the canvas from the HTML
    var canvas = document.getElementById("gl-canvas");
    gl = canvas.getContext('webgl2');
    // Check if the browser supports the WEBGL 2.0 or not
    if (!gl) alert( "WebGL 2.0 isn't available" );

   // Create a program with the WEBGL and add the vertex shader and the fragment shaders to it.
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

  

   // Render the data points.
    render();
};


function render() {
   // To draw the graphics on the page
    gl.drawArrays(gl.POINTS, 2, 3);
}