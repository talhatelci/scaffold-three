import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default class AssetLoader {
  constructor(assets) {
    this.assets = assets;

    this.loadedAssets = {};

    this.loaded = 0;
    this.toLoad = this.assets.length;
    this.callbacks = [];

    this.setLoaders();
    this.loadAssets();
  }

  setLoaders() {
    this.textureLoader = new THREE.TextureLoader(this.loadingManager);
    this.cubeTextureLoader = new THREE.CubeTextureLoader(this.loadingManager);
    this.gltfLoader = new GLTFLoader(this.loadingManager);
  }

  loadAssets() {
    this.assets.forEach((asset) => {
      switch (asset.type) {
        case "texture":
          this.loadedAssets[asset.name] = this.textureLoader.load(asset.url);
          this.loadedAssets[asset.name].flipY = false;
          if (Object.keys(asset).includes("flipY")) {
            this.loadedAssets[asset.name].flipY = asset.flipY;
          }
          this.checkLoaded();
          break;

        case "cubeTexture":
          this.loadedAssets[asset.name] = this.cubeTextureLoader.load(
            asset.url,
          );
          this.checkLoaded();
          break;

        case "gltf":
          this.gltfLoader.load(asset.url, (gltf) => {
            this.loadedAssets[asset.name] = gltf;
            this.checkLoaded();
          });
          break;
      }
    });
  }

  checkLoaded() {
    this.loaded++;
    if (this.loaded == this.toLoad) {
      this.callbacks.forEach((callback) => {
        callback(this.loadedAssets);
      });
    }
  }

  onLoad(callback) {
    if (this.loaded == this.toLoad) {
      callback(this.loadedAssets);
    } else {
      this.callbacks.push(callback);
    }
  }
}
