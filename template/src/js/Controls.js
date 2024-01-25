import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

export default class Controls {
  constructor(three) {
    this.three = three;
    this.camera = this.three.camera;
    this.domElement = this.three.container;

    this.setOrbitControls();
  }

  setOrbitControls() {
    this.camera.position.set(0, 0, 4);

    this.orbit = new OrbitControls(this.camera, this.domElement);
    this.orbit.target = new THREE.Vector3(0, 0, 0);
    this.orbit.enableDamping = true;

    this.three.onTick(() => {
      this.orbit.update();
    });
  }
}
