import vertexShader from "./shaders/vertexShader.glsl?raw";
import fragmentShader from "./shaders/fragmentShader.glsl?raw";
import { PlaneGeometry, RawShaderMaterial, Mesh } from "three";

const setObjects = (three) => {
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
  three.scene.add(plane);

  three.animate((elapsed) => {
    plane.material.uniforms.uTime.value = elapsed;
  });
};

export { setObjects };
