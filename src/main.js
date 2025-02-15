import kaplay from "kaplay";
import "kaplay/global";

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

scene("game", () => {
  add([sprite("spacebg"), pos(0, 0)]);

  const spaceship = add([sprite("spaceship"), pos(10, center().y), area()]);

  spaceship.onKeyDown("up", () => {
    if (spaceship.pos.y >= 0) {
      spaceship.move(0, -200);
    }
  });

  spaceship.onKeyDown("down", () => {
    if (spaceship.pos.y <= height() - spaceship.height) {
      spaceship.move(0, 200);
    }
  });

  spaceship.onKeyPress("space", () => {
    play("laser", { volume: 0.3 });

    const bullet = add([
      sprite("bullet"),
      pos(
        spaceship.pos.x + spaceship.width,
        spaceship.pos.y + spaceship.height / 2 - 5
      ),
      area(),
      offscreen(),
      "bullet",
    ]);

    bullet.onUpdate(() => {
      bullet.move(300, 0);
    });

    bullet.onExitScreen(() => {
      destroy(bullet);
    });
  });

  spaceship.onCollide("enemy", (enemy) => {
    destroy(spaceship);
    destroy(enemy);
  });

  const spawnEnemies = () => {
    const randY = rand(0, height() - 50);
    const enemy = add([
      sprite("bean"),
      pos(width(), randY),
      area(),
      offscreen(),
      "enemy",
    ]);

    enemy.onUpdate(() => {
      enemy.move(-200, 0);
    });

    enemy.onCollide("bullet", (bullet) => {
      play("explosion", { volume: 0.3 });
      destroy(enemy);
      destroy(bullet);
    });

    enemy.onExitScreen(() => {
      if (enemy.pos.x < 0) {
        destroy(enemy);
      }
    });

    const waitTime = rand(0.5, 1.5);
    wait(waitTime, spawnEnemies);
  };
  spawnEnemies();
});

go("game");
