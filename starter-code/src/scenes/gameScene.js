export const gameScene = () => {
  add([sprite("spacebg"), pos(0, 0)]);

  const spaceship = add([sprite("spaceship"), pos(10, center().y), area()]);

  spaceship.onKeyDown("up", () => {
    // SKRIV DIN KODE HERUNDER 
  });

  spaceship.onKeyDown("down", () => {
    // SKRIV DIN KODE HERUNDER
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
      // SKRIV DIN KODE HERUNDER
    });

    bullet.onExitScreen(() => {
      destroy(bullet);
    });
  });

  spaceship.onCollide("enemy", (enemy) => {
    destroy(spaceship);
    destroy(enemy);
    go("gameover");
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
};
