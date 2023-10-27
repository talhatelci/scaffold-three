import vertexShader from "./shaders/vertexShader.glsl?raw";
import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import { PlaneGeometry, RawShaderMaterial, Mesh } from "three";

const setObjects = () => {
  let plane = new Mesh(
    new PlaneGeometry(1, 1),
    new RawShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  );
  _three.scene.add(plane);

  _three.animate((elapsed) => {
    plane.material.uniforms.uTime.value = elapsed;
  });
};

export { setObjects };
