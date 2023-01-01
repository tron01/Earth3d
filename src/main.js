import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
//console.log("hai");

//scene
const scene = new THREE.Scene();
//camera(field of view,aspect,near,far)
const camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000);
//orbit controler
const orbit = new OrbitControls(camera, renderer.domElement);
/*axesHelper 

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
*/
//camera position
/*
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 0;
*/ camera.position.set(0, 2, 5);

//camera postion update by mouse 
orbit.update();

//box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

//plane

const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xee000f })
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

//point light
/*
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10);
scene.add(pointLight);
*/
//AmbientLight 
const AmbientLight = new THREE.AmbientLight(0xffffff);
scene.add(AmbientLight);

//gridHelper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

function animate(time) {
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    //render(scene,camera)
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate)
