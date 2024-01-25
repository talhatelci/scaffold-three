import * as THREE from "three";

const params = {};

export default class Environment {
  constructor(three, assets) {
    this.three = three;
    this.assets = assets;

    this.setScene();
    this.setLights();

    if (this.three.debug) {
      this.setPanel();
    }
  }

  setScene() {
    let scene = this.three.scene;
    // scene.environment =
    // scene.background =
  }

  setLights() {}

  setPanel() {
    // let folder = this.three.panel.addFolder("Environment");
  }
}
