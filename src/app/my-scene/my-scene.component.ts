import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import * as TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

@Component({
  selector: 'app-my-scene',
  templateUrl: './my-scene.component.html',
  styleUrls: ['./my-scene.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MySceneComponent implements OnInit {

  @ViewChild('canvasWrapper') canvasWrapperRef: ElementRef;
  private canvasWrapper: HTMLDivElement;

  private scene: THREE.Scene = null;
  private camera: THREE.Camera = null;
  private renderer: THREE.Renderer = null;

  private cameraPosition = new THREE.Vector3(-10, 10, -15);
  private cameraLookAt = new THREE.Vector3(0, 0, 0);

  private orbitControls: THREE.OrbitControls = null;

  constructor() { }

  ngOnInit() {

    this.canvasWrapper = this.canvasWrapperRef.nativeElement;
    this.init();

  }

  init() {
    this.scene = new THREE.Scene();
    const pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this.renderer = new THREE.WebGLRenderer({ devicePixelRatio: pixelRatio });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.canvasWrapper.appendChild(this.renderer.domElement);

    this.initCamera();
    this.initControls();
    this.addCube();

    this.animate();
  }

  private initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.lookAt(this.cameraLookAt);
    this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z);
  }

  private initControls() {
    this.orbitControls = new OrbitControls(this.camera);
    this.orbitControls.rotateSpeed = 1.0;
    this.orbitControls.zoomSpeed = 1.2;
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
    TWEEN.update();
  }

  private addCube() {
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00bcd4 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;

    this.scene.add(cube);
  }

}
