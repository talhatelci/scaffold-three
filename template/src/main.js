import "./style.css";
import { setThree } from "./setThree.js";
import { loadAssets } from "./loadAssets.js";
import { setInitialState } from "./setInitialState.js";
import { setEnvironment } from "./setEnvironment.js";
import { setObjects } from "./setObjects.js";

let three = setThree();
three.app = {
  assets: null,
};

loadAssets()
  .then((data) => {
    three.app.assets = data;
    start();
  })
  .catch((error) => {
    console.error(error);
  });

function start() {
  setInitialState(three);
  setEnvironment(three);
  setObjects(three);
}
