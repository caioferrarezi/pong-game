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

function getIntRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
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
  winningPlayer: number;

  constructor() {
    super(GAME_WIDTH, GAME_HEIGHT);
  }

  reset(): void {
    this.player1Score = 0;
    this.player2Score = 0;

    this.servingPlayer = this.winningPlayer === 1 ? 2 : 1;

    this.resetBall();
  }

  resetBall(): void {
    let direction = getIntRandomNumber(1, 3) === 1 ? -1 : 1;

    this.ball = new Ball(GAME_WIDTH / 2 - 5, GAME_HEIGHT / 2 - 5);
    this.ball.dx = this.servingPlayer === 1 ? BALL_SPEED : -BALL_SPEED;
    this.ball.dy = getIntRandomNumber(100, BALL_SPEED) * direction;
  }

  setBallDirection(): void {
    if (this.ball.dy < 0) {
      this.ball.dy = -getIntRandomNumber(100, BALL_SPEED);
    } else {
      this.ball.dy = getIntRandomNumber(100, BALL_SPEED);
    }
  }

  onKeyPress(key: string) {
    if (key === 'Enter' || key === 'Space') {
      if (this.state === 'start') {
        this.state = 'serve';
      } else if (this.state === 'serve') {
        this.state = 'play';
      } else if (this.state === 'end') {
        this.state = 'start'
        this.reset();
      }
    }
  }

  setup(): void {
    this.state = 'start';
    this.servingPlayer = getIntRandomNumber(1, 3);

    this.ball = new Ball(GAME_WIDTH / 2 - 5, GAME_HEIGHT / 2 - 5);

    this.player1 = new Paddle(20, GAME_HEIGHT / 2 - 20);
    this.player2 = new Paddle(GAME_WIDTH - 30, GAME_HEIGHT / 2 - 20);

    this.player1Score = 0;
    this.player2Score = 0;

    this.ball.dx = this.servingPlayer === 1 ? BALL_SPEED : -BALL_SPEED;
    this.ball.dy = getIntRandomNumber(100, BALL_SPEED);

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

        this.setBallDirection();

        this.paddleHitSound.play();
      } else if (this.ball.collides(this.player2)) {
        this.ball.x = this.player2.x - this.ball.width;
        this.ball.dx = -this.ball.dx * 1.03;

        this.setBallDirection();

        this.paddleHitSound.play();
      }

      if (this.ball.y <= 0) {
        this.ball.y = 0;
        this.ball.dy = -this.ball.dy;

        this.wallHitSound.play()
      } else if (this.ball.y + this.ball.height >= GAME_HEIGHT) {
        this.ball.y = GAME_HEIGHT - this.ball.height - 1;
        this.ball.dy = -this.ball.dy;

        this.wallHitSound.play();
      }

      if (this.ball.x + this.ball.width < 0) {
        this.servingPlayer = 2;
        this.player2Score += 1;
        this.state = 'serve';
        this.resetBall();

        this.scoreSound.play();
      } else if (this.ball.x > GAME_WIDTH) {
        this.servingPlayer = 1;
        this.player1Score += 1;
        this.state = 'serve';
        this.resetBall();

        this.scoreSound.play();
      } else {
        this.ball.update(delta);
      }

      if (this.player1Score === 3) {
        this.winningPlayer = 1;
        this.state = 'end';
      } else if (this.player2Score === 3) {
        this.winningPlayer = 2;
        this.state = 'end';
      }
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

    if (this.state === 'start') {
      this.context.font = '32px RetroGaming';
      this.context.fillText('Welcome to Pong!', GAME_WIDTH / 2, 48);

      this.context.font = '16px RetroGaming';
      this.context.fillText(`Press [space] or [enter] to play`, GAME_WIDTH / 2, 80);
    } else if (this.state === 'serve') {
      this.context.font = '32px RetroGaming';
      this.context.fillText(`Player ${this.servingPlayer}\'s turn`, GAME_WIDTH / 2, 48);

      this.context.font = '16px RetroGaming';
      this.context.fillText(`Press [space] or [enter] to serve`, GAME_WIDTH / 2, 80);
    } else if (this.state === 'end') {
      this.context.font = '32px RetroGaming';
      this.context.fillText(`Player ${this.winningPlayer} is the winner`, GAME_WIDTH / 2, 48);
      this.context.font = '16px RetroGaming';
      this.context.fillText(`Press [space] or [enter] to restart`, GAME_WIDTH / 2, 80);
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
