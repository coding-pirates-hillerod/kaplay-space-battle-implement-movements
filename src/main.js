import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
  debug: true,
  debugKey: "d",
});

loadSprite("spacebg", "graphics/spacebg.png");
loadSprite("spaceship", "graphics/spaceship.png");
loadSprite("bullet", "graphics/bullet.png");

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
      bullet.moveTo(bullet.pos.x + 5, bullet.pos.y);
    });

    bullet.onExitScreen(() => {
      destroy(bullet);
    });
  });
});

go("game");
