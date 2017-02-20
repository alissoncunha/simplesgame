/// <reference path="../typings/index.d.ts" />

import { MainState } from './states/states';

class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, 'game');
        this.state.add('main', MainState);
    }

    public startGame() {
        this.state.start('main');
    }

    public resizeGame() {
        
    }
}

const game = new Game();
game.startGame();