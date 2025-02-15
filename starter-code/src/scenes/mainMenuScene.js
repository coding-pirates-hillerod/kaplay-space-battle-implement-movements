export const mainMenuScene = () => {
  add([sprite("spacebg"), pos(0, 0)]);

  add([
    text("KILL THE ALIEN 'BEANIES'!!", { size: 64 }),
    pos(center().x, center().y - 100),
    anchor("center"),
  ]);

  add([text("Press space to play .."), pos(center()), anchor("center")]);

  onKeyPress("space", () => go("game"));
};
