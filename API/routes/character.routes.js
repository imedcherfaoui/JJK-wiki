module.exports = app => {
  const characters = require("../controllers/CharacterController.js");

  var router = require("express").Router();

  router.get("/characters", characters.getCharacters);

  router.post("/save", characters.save);

  router.put("/characters/:firstname", characters.updateCharacter);

  router.get("/characters/:firstname", characters.getCharacter);

  router.delete("/characters/:firstname", characters.deleteCharacter);

  app.use("", router);
};