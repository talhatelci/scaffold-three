import "./style.css";
import Three from "./js/Three.js";
import Controls from "./js/Controls.js";
import assets from "./js/assets.js";
import AssetLoader from "./js/AssetLoader.js";
import Environment from "./js/Environment.js";
import World from "./js/World.js";

let three = new Three(document.getElementById("three"));
let controls = new Controls(three);
let assetLoader = new AssetLoader(assets);
assetLoader.onLoad((loaded) => {
  let environment = new Environment(three, loaded);
  let world = new World(three, loaded);
});
