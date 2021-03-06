import { GAME_HEIGHT } from '@/utils';
export default class Paddle {
  x: number;
  y: number;

  dy: number;

  width: number;
  height: number;

  constructor(x: number, y: number, width = 10, height = 40) {
    this.x = x;
    this.y = y;

    this.dy = 0;

    this.width = width;
    this.height = height;
  }

  update(delta: number): void {
    if (this.dy < 0) {
      this.y = Math.max(this.y + this.dy * delta, 0);
    } else {
      this.y = Math.min(this.y + this.dy * delta, GAME_HEIGHT - this.height);
    }
  }

  render(context: CanvasRenderingContext2D): void {
    context.fillStyle = '#ffffff';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
