export class Canvas {
  width: number;
  height: number;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.context = this.canvas.getContext('2d');

    document.body.insertAdjacentElement('afterbegin', this.canvas);
  }
}

const canvas = new Canvas(768, 432);

export default canvas;
