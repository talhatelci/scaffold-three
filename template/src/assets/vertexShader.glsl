uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {

  vec4 mPosition = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * mPosition;
  vec4 mvpPosition = projectionMatrix * mvPosition;

  gl_Position = mvpPosition;

  vUv = uv;

}
