interface KeysObject {
  [key: string]: boolean;
}

class Keyboard {
  keysDown: KeysObject;

  constructor() {
    this.keysDown = {};
  }

  isDown(key: string): boolean {
    return !!this.keysDown[key];
  }
}

const keyboard = new Keyboard();
export default keyboard;
