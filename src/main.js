import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
  debug: true,
  debugKey: "d",
});

loadSprite("spacebg", "graphics/spacebg.png");
loadSprite("spaceship", "graphics/spaceship.png");
loadSprite("bullet", "graphics/bullet.png");
loadSprite("bean", "sprites/bean.png");

scene("game", () => {
  add([sprite("spacebg"), pos(0, 0)]);

  const spaceship = add([sprite("spaceship"), pos(10, center().y)]);

  spaceship.onKeyDown("up", () => {
    if (spaceship.pos.y >= 0) {
      spaceship.moveTo(spaceship.pos.x, spaceship.pos.y - 10);
    }
  });

  spaceship.onKeyDown("down", () => {
    if (spaceship.pos.y <= height() - spaceship.height) {
      spaceship.moveTo(spaceship.pos.x, spaceship.pos.y + 10);
    }
  });

  spaceship.onKeyPress("space", () => {
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
      // bullet.moveTo(bullet.pos.x + 5, bullet.pos.y);
      bullet.move(300, 0);
    });

    bullet.onExitScreen(() => {
      destroy(bullet);
    });
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
