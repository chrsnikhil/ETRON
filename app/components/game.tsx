'use client';
import { Scene } from 'phaser';
import React, { useEffect } from 'react';

class MainScene extends Scene {
  constructor() {
    super({ key: 'MainScene' });
    // ... existing code ...
  }
  preload() {
    // Load assets here
    this.load.image('logo', '/public/vercel.svg');
  }

  create() {
    // Add assets to the scene
    this.add.image(400, 300, 'logo');
  }

  update() {
    // Game logic goes here
  }
}

const PhaserGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      scene: [MainScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};

export default PhaserGame;
