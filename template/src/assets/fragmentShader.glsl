precision mediump float;

uniform float uTime;

varying vec2 vUv;

void main() {

  vec3 color = vec3(vUv, (sin(uTime) + 1.0) * 0.5);

  gl_FragColor = vec4(color, 1.0);

}
