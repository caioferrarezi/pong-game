import Engine from '@/engine';
import Paddle from '@/game/Paddle';
import Ball from '@/game/Ball';

import {
  PADDLE_SPEED,
  BALL_SPEED,
  GAME_WIDTH,
  GAME_HEIGHT
} from '@/utils/index'

const { default: score } = require('@/assets/audio/score.wav');
const { default: paddleHit } = require('@/assets/audio/paddle_hit.wav');
const { default: wallHit } = require('@/assets/audio/wall_hit.wav');
export default class Game extends Engine {
  state: string;

  ball: Ball;
  player1: Paddle;
  player2: Paddle;

  player1Score: number;
  player2Score: number;

  scoreSound: HTMLAudioElement;
  paddleHitSound: HTMLAudioElement;
  wallHitSound: HTMLAudioElement;

  servingPlayer: number;

  constructor() {
    super(GAME_WIDTH, GAME_HEIGHT);
  }

  reset(): void {
    this.ball = new Ball(GAME_WIDTH / 2 - 5, GAME_HEIGHT / 2 - 5);
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

  setup(): void {
    this.state = 'serve';
    this.servingPlayer = Math.floor(Math.random() * (3 - 1) + 1);

    this.ball = new Ball(GAME_WIDTH / 2 - 5, GAME_HEIGHT / 2 - 5);

    this.player1 = new Paddle(20, GAME_HEIGHT / 2 - 20);
    this.player2 = new Paddle(GAME_WIDTH - 30, GAME_HEIGHT / 2 - 20);

    this.player1Score = 0;
    this.player2Score = 0;

    this.ball.dx = this.servingPlayer === 1 ? BALL_SPEED : -BALL_SPEED;
    this.ball.dy = Math.floor(Math.random() * (BALL_SPEED - 100) + 100);

    this.scoreSound = new Audio(score);
    this.paddleHitSound = new Audio(paddleHit);
    this.wallHitSound = new Audio(wallHit);

    this.scoreSound.volume = 0.3;
    this.paddleHitSound.volume = 0.4;
    this.wallHitSound.volume = 0.4;
  }

  update(delta: number): void {
    if (this.keyboard.isDown('KeyW')) {
      this.player1.dy = -PADDLE_SPEED;
    } else if (this.keyboard.isDown('KeyS')) {
      this.player1.dy = PADDLE_SPEED;
    } else {
      this.player1.dy = 0;
    }

    if (this.keyboard.isDown('ArrowUp')) {
      this.player2.dy = -PADDLE_SPEED;
    } else if (this.keyboard.isDown('ArrowDown')) {
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
      } else if (this.ball.y + this.ball.height >= GAME_HEIGHT) {
        this.ball.y = GAME_HEIGHT - this.ball.height - 1;
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
      } else if (this.ball.x > GAME_WIDTH) {
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
    this.context.fillStyle = '#282d34';
    this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Render text
    this.context.fillStyle = '#ffffff';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';

    if (this.state === 'serve') {
      this.context.font = '32px RetroGaming';
      this.context.fillText(`Player ${this.servingPlayer}\'s serving`, GAME_WIDTH / 2, 48);

      this.context.font = '16px RetroGaming';
      this.context.fillText(`Press [space] or [enter] to play`, GAME_WIDTH / 2, 80);
    }

    // Render score
    this.context.textAlign = 'center';
    this.context.textBaseline = 'bottom';
    this.context.font = '64px RetroGaming';
    this.context.fillText(this.player1Score.toString(), GAME_WIDTH / 2 - 64, GAME_HEIGHT / 2 - 15);
    this.context.fillText(this.player2Score.toString(), GAME_WIDTH / 2 + 64, GAME_HEIGHT / 2 - 15);

    this.ball.render(this.context);

    this.player1.render(this.context);
    this.player2.render(this.context);
  }
}
