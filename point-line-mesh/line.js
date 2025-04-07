import * as THREE from 'three';

const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
  0, 0, 0,
  100, 0, 0,
  0, 100, 0,
  0, 0, 100,
  100, 100, 0
]);
const attribute = new THREE.BufferAttribute(vertices, 3);
geometry.attributes.position = attribute;

const material = new THREE.LineBasicMaterial({
  color: new THREE.Color('orange')
});

/**
 * - 线模型有 Line、LineLoop、LineSegments 这三种。
 * - 总之，一堆顶点数据，可以每三个连成一个三角形，然后构成网格模型，绝大多数情况下我们都是用网格模型。
 * - 也可以单独渲染点，就是点模型，还可以连成线，就是线模型。
 */
const line = new THREE.Line(geometry, material);

export default line;
