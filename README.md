# README FILE

#### Uniforms
    - It is a global variable and it is used anywhere in the program and it is defined in the shaders(vertex and Fragment).
    - It cannot change during the draw functions call(draw Arrays or daw Elements).
     - It is available for both vertex and fragment shaders
    ## Fragment Shader
        - uniform vec4 uColor;
        - out vec4 fragColor;
        main()
        {
            fragColor=uColor;
        }

    #### Locations
        - Help to connect JS to WEBGL program

        - getAttribLocation() -> returns - Number
        - getUniformLocation() -> returns - Object

        - The value does not change in the entire program.
        - Ask only one time after the program is linked.

        ## JS
            - const uColorLocation=gl.getUniformLocation(program,"uColor");
            - gl.uniform4f(uColorLocation,1,0,0,1);


#### Attributes
    - Can draw multiple points or shapes or Lines using multiple Draw Calls
    - Can pull data from the array buffers.
    - It is only available in the vertex shaders.
    - It is changing for every vertex in the buffer.
    - Only 16 attributes at a time

    ## Location
        - gl.getAttribLocation()
        - gl.bindAttribLocation("program",0,"attributeName")

        - gl.vertexAttribPointer(locSize,2,gl.FLOAT,false,3*4,2*4)



