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

    this.width = 5;
    this.height = 5;
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
    let adjustX = this.dx < 0 ? 1 : 0;
    let adjustY = this.dy < 0 ? 1 : 0;

    this.x += Math.ceil(this.dx * delta - adjustX);
    this.y += Math.ceil(this.dy * delta - adjustY);
  }

  render(): void {
    canvas.context.fillStyle = '#ffffff';
    canvas.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
