import canvas from 'canvas/index';

import Paddle from 'game/Paddle';
import Ball from 'game/Ball';
import keyboard from 'keyboard/index';

const PADDLE_SPEED = 150;
const BALL_SPEED = 100;

class Game {
  ball: Ball;
  state: string;

  player1: Paddle;
  player2: Paddle;

  player1Score: number;
  player2Score: number;

  servingPlayer: number;

  constructor() {
    this.state = 'serve';
    this.servingPlayer = Math.floor(Math.random() * (1 + 2) - 1);

    this.ball = new Ball(canvas.width / 2 - 2, canvas.height / 2 - 2.5);

    this.player1 = new Paddle(10, canvas.height / 2 - 10);
    this.player2 = new Paddle(canvas.width - 15, canvas.height / 2 - 10);

    this.player1Score = 0;
    this.player2Score = 0;

    this.ball.dx = this.servingPlayer === 1 ? BALL_SPEED : -BALL_SPEED;
    this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 10) + 10);
  }

  reset(): void {
    this.ball = new Ball(canvas.width / 2 - 2, canvas.height / 2 - 2.5);
    this.ball.dx = this.servingPlayer === 1 ? BALL_SPEED : -BALL_SPEED;
    this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 10) + 10);
  }

  onKeyPress(key: string) {
    if (key === 'Enter' || key === 'Space') {
      if (this.state === 'serve') {
        this.state = 'play';
      }
    }
  }

  update(delta: number): void {
    if (keyboard.isDown('KeyW')) {
      this.player1.dy = -PADDLE_SPEED;
    } else if (keyboard.isDown('KeyS')) {
      this.player1.dy = PADDLE_SPEED;
    } else {
      this.player1.dy = 0;
    }

    if (keyboard.isDown('ArrowUp')) {
      this.player2.dy = -PADDLE_SPEED;
    } else if (keyboard.isDown('ArrowDown')) {
      this.player2.dy = PADDLE_SPEED;
    } else {
      this.player2.dy = 0;
    }


    if (this.state === 'play') {

      if (this.ball.collides(this.player1)) {
        this.ball.x = this.player1.x + this.player1.width;
        this.ball.dx = -this.ball.dx * 1.03;

        if (this.ball.dy < 0) {
          this.ball.dy = -Math.floor(Math.random() * (BALL_SPEED - 10) + 10);
        } else {
          this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 10) + 10);
        }
      } else if (this.ball.collides(this.player2)) {
        this.ball.x = this.player2.x - this.ball.width;
        this.ball.dx = -this.ball.dx * 1.03;

        if (this.ball.dy < 0) {
          this.ball.dy = -Math.floor(Math.random() * (BALL_SPEED - 10) + 10);
        } else {
          this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 10) + 10);
        }
      }

      if (this.ball.y <= 0) {
        this.ball.y = 0;
        this.ball.dy = -this.ball.dy;
      } else if (this.ball.y + this.ball.height >= canvas.height) {
        this.ball.y = canvas.height - this.ball.height - 1;
        this.ball.dy = -this.ball.dy;
      }

      if (this.ball.x + this.ball.width < 0) {
        this.servingPlayer = 2;
        this.player2Score += 1;
        this.state = 'serve';
        this.reset();

        return;
      } else if (this.ball.x > canvas.width) {
        this.servingPlayer = 1;
        this.player1Score += 1
        this.state = 'serve';
        this.reset();

        return;
      }

      this.ball.update(delta);
    }

    this.player1.update(delta);
    this.player2.update(delta);
  }

  render(): void {
    // Render background
    canvas.context.fillStyle = '#282d34';
    canvas.context.fillRect(0, 0, canvas.width, canvas.height);

    // Render score
    canvas.context.fillStyle = '#ffffff';
    canvas.context.textAlign = 'center';
    canvas.context.textBaseline = 'bottom';
    canvas.context.font = '32px monospace';
    canvas.context.fillText(this.player1Score.toString(), canvas.width / 2 - 50, canvas.height / 2 - 20);
    canvas.context.fillText(this.player2Score.toString(), canvas.width / 2 + 50, canvas.height / 2 - 20);

    this.ball.render();

    this.player1.render();
    this.player2.render();
  }
}

const game = new Game();
export default game;
