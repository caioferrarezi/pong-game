export default class Canvas {
  private width: number;
  private height: number;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    document.body.insertAdjacentElement('afterbegin', this.canvas);
  }

  getContext(): CanvasRenderingContext2D {
    this.context = this.canvas.getContext('2d');

    return this.context;
  }
}
