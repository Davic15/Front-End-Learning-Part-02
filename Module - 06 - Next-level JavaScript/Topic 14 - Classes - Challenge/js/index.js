import { Player, TennisPlayer } from "./player.js";

const messi = new Player("Messi", "Argentina");
const roger = new TennisPlayer ("Roger Federer", "Spain", 38);

messi.introduce();
roger.playTennis();
roger.introduce();