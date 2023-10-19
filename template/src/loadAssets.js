import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { TextureLoader, LoadingManager, CubeTextureLoader, RepeatWrapping } from "three";

const loadingManager = new LoadingManager();
const gltfLoader = new GLTFLoader(loadingManager);
const textureLoader = new TextureLoader(loadingManager);
const cubeTextureLoader = new CubeTextureLoader(loadingManager);

const modelFiles = {};

const textureFiles = {};

const envmapFiles = [
  // "envmap/px.png",
  // "envmap/nx.png",
  // "envmap/py.png",
  // "envmap/ny.png",
  // "envmap/pz.png",
  // "envmap/nz.png",
];

const loadAssets = () => {
  let models = {};
  let textures = {};
  let envmap;

  let promise = new Promise((resolve, reject) => {
    for (let [key, value] of Object.entries(modelFiles)) {
      gltfLoader.load(value, (gltf) => {
        models[key] = gltf;
      });
    }

    for (let [key, value] of Object.entries(textureFiles)) {
      textureLoader.load(value, (texture) => {
        texture.flipY = false;
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        textures[key] = texture;
      });
    }

    envmap = cubeTextureLoader.load(envmapFiles);

    if (Object.keys(modelFiles).length + Object.keys(textureFiles) + envmapFiles.length == 0) {
      resolve({});
    } else {
      loadingManager.onLoad = () => {
        resolve({
          models,
          textures,
          envmap,
        });
      };

      loadingManager.onError = () => {
        reject("Error loading assets.");
      };
    }
  });

  return promise;
};

export { loadAssets };
