import "./style.css";
import Three from "./js/Three.js";
import Controls from "./js/Controls.js";
import assets from "./js/assets.js";
import AssetLoader from "./js/AssetLoader.js";
import Environment from "./js/Environment.js";
import World from "./js/World.js";

let three = new Three(document.getElementById("three"));
three.controls = new Controls(three);
three.assetLoader = new AssetLoader(assets);
three.assetLoader.onLoad((loaded) => {
  three.environment = new Environment(three, loaded);
  three.world = new World(three, loaded);
});
