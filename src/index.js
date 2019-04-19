
import WebGLManager from './editor/animation/WebGLManager';


const template = {
    fps: 60,
    items: {
        "0": {type: "JSNation2D", configurations: 161616},
        "1": {type: "Background", configurations: 171717},
        "2": {type: "JSNation2D", configurations: 181818}
    },
    scenes: [
        {type: 'canvas', configurations: 131313, items: [0]},
        {type: 'ortho', configurations: 141414, items: [1]},
        {type: 'perspective', configurations: 141414, items: [2]}

    ],
    configurations: {
        "131313": {},
        "141414": {},
        "151515": {},
        "161616": {},
        "171717": {},
        "181818": {},
    }
}



let scenes = [];
let time = 0;
let canvas, ctx;
function initCanvas() {
    canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
}

let manager = WebGLManager();
function initScenes() {
    
    template.scenes.forEach(scene => {

    });
}

window.__draw = () => {
     
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const buffer = data.data.buffer;
    window.__addImageData(buffer);

    time += 1 / template.fps;
};

initCanvas();
initScenes();


window.__test = ":D";
//window.__draw();