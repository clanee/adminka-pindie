const gamesRoute = require("express").Router();
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
const {
  findGameById,
  updateGamesFile,
  checkIsTitleInArray,
  updateGamesArray,
  getAllGames,
  deleteGame,
} = require("../middlewares/games");

gamesRoute.get("/games", getAllGames, sendAllGames);
gamesRoute.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames
);
gamesRoute.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);

module.exports = gamesRoute;
