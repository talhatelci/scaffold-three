import { Vector3 } from "three";

const setInitialState = (three) => {
  three.camera.position.set(0, 0, 3);

  three.controls.target = new Vector3();
};

export { setInitialState };
