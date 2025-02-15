import kaplay from "kaplay";
import "kaplay/global";

import { mainMenuScene } from "./scenes/mainMenuScene";
import { gameScene } from "./scenes/gameScene";
import { gameOverScene } from "./scenes/gameOverScene";

kaplay({
  debug: true,
  debugKey: "d",
});

loadSprite("spacebg", "graphics/spacebg.png");
loadSprite("spaceship", "sprites/spaceship.png");
loadSprite("bullet", "sprites/bullet.png");
loadSprite("bean", "sprites/bean.png");

loadSound("laser", "sounds/laser.wav");
loadSound("explosion", "sounds/explosion.wav");

scene("main-menu", mainMenuScene);
scene("game", gameScene);
scene("gameover", gameOverScene);

go("main-menu");
