import keyboard from 'keyboard/index';
import game from 'game/index';

import 'assets/style/index.css';

let oldTimelapse = 0;
let elapsedTime = 0;

function onKeyPress(key: string): void {
  game.onKeyPress(key);
}

function update(delta: number): void {
  game.update(delta);
}

function draw(): void {
  game.render();
}

function loop(timestamp: number): void {
  elapsedTime = (timestamp - oldTimelapse) / 1000;
  oldTimelapse = timestamp;

  update(+elapsedTime.toFixed(3));
  draw();

  requestAnimationFrame(loop);
}

document.addEventListener('keypress', event => {
  onKeyPress(event.code);
})

document.addEventListener('keydown', event => {
  keyboard.keysDown[event.code] = true;
});

document.addEventListener('keyup', event => {
  delete keyboard.keysDown[event.code];
})

requestAnimationFrame(loop);
