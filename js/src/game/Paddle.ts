import canvas from 'canvas/index';

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
      this.y = Math.max(Math.floor(this.y + this.dy * delta), 0);
    } else {
      this.y = Math.min(Math.floor(this.y + this.dy * delta), canvas.height - this.height);
    }
  }

  render(): void {
    canvas.context.fillStyle = '#ffffff';
    canvas.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
