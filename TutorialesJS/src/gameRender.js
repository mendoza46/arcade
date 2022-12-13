import globals from "./globals.js";
import {FPS, Game} from "./constants.js";

//Función que renderiza los gráficos
export default function render()
{
    //Change what the game is doing based on the game state
    switch(globals.gameState)
    {
        case Game.LOADING:
            //DRaw loading spinner
            break;

        case Game.PLAYING:
            drawGame();
            break;

        default:
            console.error("Error: Game State invalid");
    }
}

function drawGame()
{
    //Borramos la pantalla entera
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);

    //Pintamos los FPS en pantalla
    globals.ctx.fillText("FPS: " + 1 / globals.deltaTime, 30, 30);
}

//Función que inicializa las variables del juego 
function initVars()
{
    //Inicializamos las variables de gestión de tiempo
    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS;

    //TEST: Inicializamos el estado a PLAYING para poder mostrar los FPS
    globals.gameState = Game.PLAYING;
}