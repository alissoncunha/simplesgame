import { Simplinho } from '../models/simplinho';

export class MainState extends Phaser.State {
    
    public simplinho: Phaser.Sprite;

    constructor() {
        super();
    }

    preload() {
        this.game.stage.setBackgroundColor('#71c5cf');
        this.game.load.image('simplinho', 'assets/imgs/simplinho.png');
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);       

        this.simplinho = this.game.add.sprite(100, 245, 'simplinho');
    }

    update() {
        
    }
}