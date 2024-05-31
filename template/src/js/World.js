import vs from "@/assets/vs.glsl";
import fs from "@/assets/fs.glsl";
import * as THREE from "three";

const params = {};

export default class World {
  constructor(three, assets) {
    this.three = three;
    this.assets = assets;

    this.setWorld();

    if (this.three.debug) {
      this.setPanel();
    }
  }

  setWorld() {
    let plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({
        vertexShader: vs,
        fragmentShader: fs,
        uniforms: {
          uTime: { value: 0 },
        },
      }),
    );
    this.three.scene.add(plane);
    this.three.onTick((elapsed) => {
      plane.material.uniforms.uTime.value = elapsed;
    });
  }

  setPanel() {
    // let folder = this.three.panel.addFolder("World");
  }
}
