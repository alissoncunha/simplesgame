import { Simplinho } from '../models/simplinho';

export class MainState extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
        this.game.stage.setBackgroundColor('#71c5cf');
        this.game.load.image('simplinho', 'assets/imgs/simplinho.png');
    }

}