import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Modal from "../components/Modal";

const LandingPage = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

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

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // scene.add(lightHelper);

    // textures
    const textureLoader = new THREE.TextureLoader();
    // const leafbg = textureLoader.load("./images/paradise7.png");
    // scene.background = leafbg;

    const gltfloader = new GLTFLoader();

    let bud = "";

    gltfloader.load(
      "./weed/scene.gltf",
      (gltf) => {
        bud = gltf.scene;
        console.log("GLTF Loaded:", bud);
        bud.position.set(0, 40, -10);
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

    // const orb = new THREE.Mesh(
    //   new THREE.SphereGeometry(1, 72, 72),
    //   new THREE.MeshStandardMaterial({
    //     metalness: 0.1,
    //     roughness: 0.2,
    //     normalMap: normalTexture,
    //     normalScale: new THREE.Vector2(4),
    //     color: "0x292929",
    //   })
    // );

    // orb.position.set(0, 0, -10);
    // scene.add(orb);

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

    const clock = new THREE.Clock();

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

  const handleClick = (e) => {
    setDisplayModal(true);
  };

  return (
    <>
      <div className="container2">
        <h1> paradise dispensary </h1>
      </div>

      <div className="landingP">
        <button onClick={handleClick} className="landingBtn">
          {" "}
          Visit Site{" "}
        </button>
      </div>
      {displayModal ? <Modal displayModal={setDisplayModal} /> : null}

      <canvas ref={canvasRef} />
    </>
  );
};

export default LandingPage;
