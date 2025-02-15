export const gameOverScene = () => {
  add([sprite("spacebg"), pos(0, 0)]);

  add([
    text("YOU DIED ..", { size: 64 }),
    pos(center().x, center().y - 100),
    anchor("center"),
  ]);

  add([
    text("Press space to kill some more alien 'beanies'!!"),
    pos(center()),
    anchor("center"),
  ]);

  onKeyPress("space", () => go("game"));
};
