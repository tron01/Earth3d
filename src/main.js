import * as THREE from 'three'

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
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
//camera position
/*
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 0;
*/ camera.position.set(0, 2, 5);

//box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);
function animate(time) {
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    //render(scene,camera)
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate)
