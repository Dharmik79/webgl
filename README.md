# README FILE

#### Uniforms
    - It is a global variable and it is used anywhere in the program and it is defined in the shaders(vertex and Fragment).
    - It cannot change during the draw functions call(draw Arrays or daw Elements).
     
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
