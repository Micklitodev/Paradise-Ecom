import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const LandingPage = () => {
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
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(0, 0, -6.5);

    const pointLight = new THREE.PointLight(0xffffff, 0.02);
    pointLight.position.set(-5 , 5 , -15 );


    const pointLight2 = new THREE.PointLight(0xffffff, 0.02);
    pointLight2.position.set(-7 , -1 , -10 );

    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 0.02);
    pointLight3.position.set(10 , 1, -18 );

    scene.add(pointLight, pointLight2, pointLight3);

    const ambiant = new THREE.AmbientLight(0x292929, 0.02);
    scene.add(ambiant)

    // const lightHelper = new THREE.PointLightHelper(pointLight3);
    // scene.add(lightHelper);

    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load("./textures/NormalMap.png");

    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(1, 72, 72),
      new THREE.MeshStandardMaterial({
        metalness: 0.1,
        roughness: 0.2,
        normalMap: normalTexture,
        normalScale: new THREE.Vector2(4),
        color: "0x292929",
      })
    );

    orb.position.set(0, 0, -10);
    scene.add(orb);

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

    const animate = () => {
      requestAnimationFrame(animate);

      let time = clock.getElapsedTime();
      orb.rotation.y += 0.5 * time;

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      orb.rotation.y += 0.5 * (targetX - orb.rotation.y);
      orb.rotation.x += 0.5 * (targetY - orb.rotation.x);
      orb.rotation.z += 0.5 * (targetY - orb.rotation.x);

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
    if (window.confirm("Are you 21 or older?" )) {
       window.location.href = '/home'
    }
  }

  return (
    <>
      <div className="container2">
        <h1> Paradise Dispensery. </h1>
      </div>
      <div className="landingP">
        <button onClick={handleClick} className="landingBtn"> Visit Site </button>
      </div>
      <canvas ref={canvasRef} />
    </>
  );
};

export default LandingPage;
