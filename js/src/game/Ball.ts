import canvas from "canvas/index";
import Paddle from "game/Paddle";

export default class Ball {
  x: number;
  y: number;

  dx: number;
  dy: number;

  width: number;
  height: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.dx = 0;
    this.dy = 0;

    this.width = 10;
    this.height = 10;
  }

  collides(paddle: Paddle): boolean {
    if (this.x + this.width < paddle.x || paddle.x + paddle.width < this.x) {
      return false;
    }

    if (this.y + this.height < paddle.y || paddle.y + paddle.height < this.y) {
      return false;
    }

    return true;
  }

  update(delta: number): void {
    this.x += Math.floor(this.dx * delta);
    this.y += Math.floor(this.dy * delta);
  }

  render(): void {
    canvas.context.fillStyle = '#ffffff';
    canvas.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
