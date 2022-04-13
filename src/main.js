let gameConfig = {
    type: Phaser.AUTO,
    width: 1250,
    height: 480,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }
        }
    },
    scene: new Scene()
};
let game = new Phaser.Game(gameConfig);