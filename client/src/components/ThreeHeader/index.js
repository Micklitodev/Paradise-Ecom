import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeHeader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // camera and scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(0, 0, 50);

    // lighting
    const pointLight = new THREE.PointLight(0xffffff, 0.3);
    pointLight.position.set(0, 0, 50);

    const ambiant = new THREE.AmbientLight(0xffffff, 0.0);
    scene.add(pointLight, ambiant);

    // light helper

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // scene.add(lightHelper);

    //gltf

    const gltfloader = new GLTFLoader();

    let bud = "";

    gltfloader.load(
      "./weed/scene.gltf",
      (gltf) => {
        bud = gltf.scene;
        console.log("GLTF Loaded:", bud);
        bud.position.set(50, 30, -15);
        bud.scale.set(1, 1, 1);
        scene.add(bud);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    //mouse defs

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    // clock

    const clock = new THREE.Clock();

    // animation loop :)

    const animate = async () => {
      requestAnimationFrame(animate);

      if (bud) {
        let time = clock.getElapsedTime();
        bud.rotation.y += 0.5 * time;

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.0001;

        bud.rotation.y += 0.5 * (targetX - bud.rotation.y);
        bud.rotation.x += 0.5 * (targetY - bud.rotation.x);
        bud.rotation.z += 0.5 * (targetY - bud.rotation.x);
      }

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("mousemove", onDocumentMouseMove);

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="container2">
        <h1 style={{ position: "absolute", top: "19%" }}>
          {" "}
          Paradise Dispensary{" "}
        </h1>
      </div>
      <canvas ref={canvasRef} />
    </>
  );
};

export default ThreeHeader;
