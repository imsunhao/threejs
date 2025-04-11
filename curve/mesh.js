import * as THREE from 'three';

// 创建点和曲线
const p1 = new THREE.Vector2(0, 0);
const p2 = new THREE.Vector2(100, 100);
const line1 = new THREE.LineCurve(p1, p2);

const arc = new THREE.EllipseCurve(0, 100, 100, 100, 0, Math.PI, false);

const p3 = new THREE.Vector2(-100, 100);
const p4 = new THREE.Vector2(0, 0);
const line2 = new THREE.LineCurve(p3, p4);

// 创建 Shape，并添加子路径
const shape = new THREE.Shape();

// 将 line1 的起点作为 moveTo 起点
shape.moveTo(p1.x, p1.y);

// 添加线段和弧线到 shape
line1.getPoints(10).forEach(p => shape.lineTo(p.x, p.y));
arc.getPoints(20).forEach(p => shape.lineTo(p.x, p.y));
line2.getPoints(10).forEach(p => shape.lineTo(p.x, p.y));

// 创建几何体
const geometry = new THREE.ShapeGeometry(shape);

// 创建材质（可以用 MeshBasicMaterial 显示填充颜色）
const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color('pink'),
  side: THREE.DoubleSide
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
