import * as THREE from "three";
import * as lil from "three/examples/jsm/libs/lil-gui.module.min.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const params = {
  outputColorSpace: THREE.LinearSRGBColorSpace,
  toneMapping: THREE.NoToneMapping,
  toneMappingExposure: 1,
};

export default class Three {
  constructor(container) {
    this.container = container;
    this.canvas = this.container.querySelector("canvas");

    this.sizes = {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
    };

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      50,
      this.sizes.width / this.sizes.height,
      0.01,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = params.outputColorSpace;
    this.renderer.toneMapping = params.toneMapping;
    this.renderer.toneMappingExposure = params.toneMappingExposure;

    this.debug = window.location.hash == "#panel";
    if (this.debug) {
      this.setPanel();
    }

    this.addEventListeners();
  }

  setPanel() {
    this.stats = new Stats();
    this.stats.showPanel(0);
    this.container.appendChild(this.stats.dom);

    this.panel = new lil.GUI({ width: 320 });

    let renderer = this.panel.addFolder("Renderer");
    renderer.add(this.renderer, "outputColorSpace", {
      Linear: THREE.LinearSRGBColorSpace,
      sRGB: THREE.SRGBColorSpace,
    });
    renderer.add(this.renderer, "toneMapping", {
      NoToneMapping: THREE.NoToneMapping,
      LinearToneMapping: THREE.LinearToneMapping,
      ReinhardToneMapping: THREE.ReinhardToneMapping,
      CineonToneMapping: THREE.CineonToneMapping,
      ACESFilmicToneMapping: THREE.ACESFilmicToneMapping,
      AgXToneMapping: THREE.AgXToneMapping,
    });
    renderer.add(this.renderer, "toneMappingExposure", 0, 3, 0.01);
  }

  addEventListeners() {
    this.resizeList = [];
    window.addEventListener("resize", () => {
      this.sizes.width = this.container.offsetWidth;
      this.sizes.height = this.container.offsetHeight;
      this.camera.aspect = this.sizes.width / this.sizes.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      this.resizeList.forEach((fn) => {
        fn(this.sizes);
      });
    });

    this.renderList = [];
    this.clock = new THREE.Clock();
    this.animationId = window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    if (this.debug) {
      this.stats.begin();
    }

    this.renderer.render(this.scene, this.camera);

    this.renderList.forEach((fn) => {
      fn(this.clock.getElapsedTime(), this.clock.getDelta());
    });

    if (this.debug) {
      this.stats.end();
    }

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  onResize(fn) {
    this.resizeList.push(fn);
  }

  onTick(fn) {
    this.renderList.push(fn);
  }
}
