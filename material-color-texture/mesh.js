import * as THREE from 'three';

const loader = new THREE.TextureLoader();
const texture = loader.load('./diqiu.awebp');
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapS = THREE.RepeatWrapping;

const geometry = new THREE.SphereGeometry(100);

const material = new THREE.MeshBasicMaterial({
  map: texture
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
