import { Vector3 } from "three";

const setInitialState = () => {
  // Scene
  // _three.scene.background = _three.assets.envmap;
  // _three.scene.backgroundBlurriness = 0.5;

  // Camera
  _three.camera.position.set(0, 0, 3);

  // Controls
  _three.controls.target = new Vector3();

  // Renderer
  // _three.renderer.outputColorSpace =
  // _three.renderer.toneMapping =
  // _three.renderer.toneMappingExposure =
};

export { setInitialState };
