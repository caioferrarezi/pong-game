import Keyboard from '@/engine/Keyboard';
import Canvas from '@/engine/Canvas';

export default abstract class Engine {
  protected keyboard: Keyboard;
  protected context: CanvasRenderingContext2D;

  private canvas: Canvas;
  private elapsedTime: number;
  private oldTimestamp: number;

  constructor(width: number, height: number) {
    this.elapsedTime = 0;
    this.oldTimestamp = 0;

    this.keyboard = new Keyboard();
    this.canvas = new Canvas(width, height);
    this.context = this.canvas.getContext();

    this.setup();
    this.setupListeners();

    requestAnimationFrame(this.loop.bind(this));
  }

  abstract setup(): void;

  abstract onKeyPress(key: string): void;

  abstract update(delta: number): void;

  abstract render(): void;

  setupListeners(): void {
    document.addEventListener('keypress', event => this.onKeyPress(event.code));
    document.addEventListener('keydown', event => this.keyboard.add(event.code));
    document.addEventListener('keyup', event => this.keyboard.remove(event.code));
  }

  loop(timestamp: number): void {
    this.elapsedTime = (timestamp - this.oldTimestamp) / 1000;
    this.oldTimestamp = timestamp;

    this.update(+this.elapsedTime.toFixed(3));
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }
}
