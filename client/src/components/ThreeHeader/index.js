import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Fade } from "react-awesome-reveal";

const ThreeHeader = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(0);

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
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(0, 0, 50);

    // lighting
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 0, 50);

    const ambiant = new THREE.AmbientLight(0xf5d8ff, 0.8);
    scene.add(pointLight, ambiant);

    // light helper

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // scene.add(lightHelper);

    //gltf

    const gltfloader = new GLTFLoader();

    let bud = "";

    gltfloader.load(
      "./nug/scene.gltf",
      (gltf) => {
        bud = gltf.scene;
        bud.position.set(1.6, -0.7, 48.2);
        bud.scale.set(1, 1, 1);
        scene.add(bud);

        checkWindowWidth();

        setIsLoaded(100);
      },
      (xhr) => {},
      (error) => {
        console.log(error);
      }
    );

    function checkWindowWidth() {
      if (window.innerWidth <= 770 && bud !== "") {
        bud.position.set(0, -0.7, 48.1);
      }
    }

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

  const handleScroll = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target) {
      const offset = -80;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isLoaded !== 100 ? (
        <>
          <div style={{ height: "100vh", width: "100vw" }}>
            <br /> <br /> <br />
            <h2 className="text-center mt-40"> Warming Up! </h2>
            <div className="text-center mt-46">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Fade>
            <div className="container2">
              <h1
                className="text-center"
                style={{
                  position: "absolute",
                  top: "19%",
                  textShadow: "0 14px 4px rgba(255, 255, 255, 0.15)",
                }}
              >
                Paradise Hemp Dispensary
              </h1>
              <h5
                className="about p-4 absolute top-72 md:top-96 text-white font-bold text-base text-shadow-2xs  rounded-md border-solid border-grey max-w-55vw max-h-96 md:max-h-96 overflow-auto hidden md:block"
                style={{
                  position: "absolute",
                  top: "calc(50% + 60px)",
                  left: "120px",
                  fontWeight: 900,
                  fontSize: 19,
                  borderRadius: 5,
                  width: "54%",
                  maxHeight: "400px",
                  overflow: "auto",
                  zIndex: 2,
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  transform: "translateY(-50%)",
                }}
              >
                At Paradise Hemp Dispensary, we believe that nature holds the
                key to well-being, and we are committed to providing our
                customers with the highest quality hemp products available.
                Founded with a passion for natural alternatives, we have curated
                a diverse selection of premium hemp products that cater to the
                needs of both seasoned enthusiasts and newcomers to the world of
                hemp. From premium CBD oils and tinctures to soothing topicals
                and edibles, our collection is thoughtfully crafted to deliver
                the best that hemp has to offer. Paradise Hemp Dispensary is not
                just a place to buy hemp products; it's a community that fosters
                wellness, sustainability, and a shared passion for nature's
                bountiful offerings. We invite you to experience the natural
                bliss of Paradise Hemp Dispensary. Join us to a happier, and
                more harmonious existence as we embrace the incredible potential
                of hemp together. Your paradise awaits!
              </h5>
            </div>
          </Fade>
          <div style={{ marginTop: -60 }}>
            <a
              className="h-28 w-40 hidden md:block"
              href="#recentlyadded"
              onClick={handleScroll}
            >
              <div
                style={{
                  marginBottom: 30,
                  height: 32,
                  width: 32,
                }}
                className="scroll-down"
              ></div>
            </a>
          </div>
        </>
      )}
      <canvas ref={canvasRef} />
    </>
  );
};

export default ThreeHeader;
