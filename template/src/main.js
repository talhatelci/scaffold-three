import "./style.css";
import { setThree } from "./setThree.js";
import { loadAssets } from "./loadAssets.js";
import { setInitialState } from "./setInitialState.js";
import { setLights } from "./setLights.js";
import { setObjects } from "./setObjects.js";

window._three = setThree();

loadAssets((assets) => {
  _three.assets = assets;
  setInitialState();
  setLights();
  setObjects();
});
