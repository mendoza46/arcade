import globals from "./globals.js";
import {initHTMLelements, initVars} from "./initialize.js";
import update from "./gameLogic.js";
import render from "./gameRender.js";

//////////////////////////////////////////////////////////////////////
// GAME INIT
//////////////////////////////////////////////////////////////////////

window.onload = init;

function init()
{

    //Inicializamos los elementos HTML: Canvas , Context, Caja de texto de pruebas
    initHTMLelements();

    //Iniialización de variables del juego
    initVars();

    //Start the first freme request
    window.requestAnimationFrame(gameLoop);
}

//////////////////////////////////////////////////////////////////////
// GAME EXECUTE
//////////////////////////////////////////////////////////////////////

//Bucle principal de ejecución
function gameLoop(timeStamp)
{
    //Keep requesting new frames
    window.requestAnimationFrame(gameLoop, globals.canvas);

    //Tiempo real del ciclo de ejecución
    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilleseconds) / 1000; //segundos

    //tiempo anterior de ciclo de ejecución
    globals.previousCycleMilleseconds = timeStamp;

    //Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo (frameTimeObj)
    globals.deltaTime += elapsedCycleSeconds;

    if (globals.deltaTime >= globals.frameTimeObj)
    {
        //Update the game logic. gameLogic.js
        update();

        //Perform the drawing operation. gameRender.js
        render();

        //Corregimos los excesos de tiempo
        globals.deltaTime -= globals.frameTimeObj;
    }
}