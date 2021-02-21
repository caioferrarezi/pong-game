import canvas from 'canvas/index';

import Paddle from 'game/Paddle';
import Ball from 'game/Ball';
import keyboard from 'keyboard/index';

const PADDLE_SPEED = 300;
const BALL_SPEED = 250;

const score = require('assets/audio/score.wav');
const paddleHit = require('assets/audio/paddle_hit.wav');
const wallHit = require('assets/audio/wall_hit.wav');
class Game {
  ball: Ball;
  state: string;

  player1: Paddle;
  player2: Paddle;

  player1Score: number;
  player2Score: number;

  scoreSound: HTMLAudioElement;
  paddleHitSound: HTMLAudioElement;
  wallHitSound: HTMLAudioElement;

  servingPlayer: number;

  constructor() {
    this.state = 'serve';
    this.servingPlayer = Math.floor(Math.random() * (3 - 1) + 1);

    this.ball = new Ball(canvas.width / 2 - 5, canvas.height / 2 - 5);

    this.player1 = new Paddle(20, canvas.height / 2 - 20);
    this.player2 = new Paddle(canvas.width - 30, canvas.height / 2 - 20);

    this.player1Score = 0;
    this.player2Score = 0;

    this.ball.dx = this.servingPlayer === 1 ? BALL_SPEED : -BALL_SPEED;
    this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 100) + 100);

    this.scoreSound = new Audio(score.default);
    this.paddleHitSound = new Audio(paddleHit.default);
    this.wallHitSound = new Audio(wallHit.default);

    this.scoreSound.volume = 0.4;
    this.paddleHitSound.volume = 0.4;
    this.wallHitSound.volume = 0.4;
  }

  reset(): void {
    this.ball = new Ball(canvas.width / 2 - 5, canvas.height / 2 - 5);
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
          this.ball.dy = -Math.floor(Math.random() * (BALL_SPEED - 100) + 100);
        } else {
          this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 100) + 100);
        }

        this.paddleHitSound.play()
      } else if (this.ball.collides(this.player2)) {
        this.ball.x = this.player2.x - this.ball.width;
        this.ball.dx = -this.ball.dx * 1.03;

        if (this.ball.dy < 0) {
          this.ball.dy = -Math.floor(Math.random() * (BALL_SPEED - 100) + 100);
        } else {
          this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 100) + 100);
        }

        this.paddleHitSound.play()
      }

      if (this.ball.y <= 0) {
        this.ball.y = 0;
        this.ball.dy = -this.ball.dy;

        this.wallHitSound.play()
      } else if (this.ball.y + this.ball.height >= canvas.height) {
        this.ball.y = canvas.height - this.ball.height - 1;
        this.ball.dy = -this.ball.dy;

        this.wallHitSound.play()
      }

      if (this.ball.x + this.ball.width < 0) {
        this.servingPlayer = 2;
        this.player2Score += 1;
        this.state = 'serve';
        this.reset();

        this.scoreSound.play();

        return;
      } else if (this.ball.x > canvas.width) {
        this.servingPlayer = 1;
        this.player1Score += 1;
        this.state = 'serve';
        this.reset();

        this.scoreSound.play();

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

    // Render text
    canvas.context.fillStyle = '#ffffff';
    canvas.context.textAlign = 'center';
    canvas.context.textBaseline = 'middle';

    if (this.state === 'serve') {
      canvas.context.font = '32px RetroGaming';
      canvas.context.fillText(`Player ${this.servingPlayer}\'s serving`, canvas.width / 2, 48);

      canvas.context.font = '16px RetroGaming';
      canvas.context.fillText(`Press [space] or [enter] to play`, canvas.width / 2, 80);
    }

    // Render score
    canvas.context.textAlign = 'center';
    canvas.context.textBaseline = 'bottom';
    canvas.context.font = '64px RetroGaming';
    canvas.context.fillText(this.player1Score.toString(), canvas.width / 2 - 64, canvas.height / 2 - 15);
    canvas.context.fillText(this.player2Score.toString(), canvas.width / 2 + 64, canvas.height / 2 - 15);

    this.ball.render();

    this.player1.render();
    this.player2.render();
  }
}

const game = new Game();
export default game;
