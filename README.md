# README FILE

CREDIT : Andrew Adamson
Youtube Link : https://www.youtube.com/user/osakaandrew
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


#### Objects
    - There are total 8 types of objects.

#### Targets
    - It describes the object's behaviour.
    - Sets and expands the objects functionality.

#### Functions
    - Bind without the object cannot work

#### Binding
    - It is used to connect WEBGL program to JS

#### DEPTH and the BLEND
    - When two or more shapes are added at that time depth can be enabled
        - gl.enable(gl.DEPTH_TEST)

    - When changing the opacity of the color at that time blend can be used to overlap the background color;
        - gl.enable(gl.BLEND)
        - gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);



#### LOOK AT
    - lookat ()
        - matrix
        - eye - where camera is placed
        - center - where camera is pointed
        - up - facing towards


#### PERSPECTIVE
    - If COP(Center of Projection) is there.
        - FOVY - Power of Lens in Radians
        - aspectratio    (canvas width/height)
        - near plane
        - far plane



