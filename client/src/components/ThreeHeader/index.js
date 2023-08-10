import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import spinner from "../../assets/spinner.gif";

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
        bud.position.set(65, 30, -20);
        bud.scale.set(1, 1, 1);
        scene.add(bud);

        checkWindowWidth();

        setIsLoaded(100);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    // check window width and update position
    function checkWindowWidth() {
      if (window.innerWidth <= 770 && bud !== "") {
        bud.position.set(0, 30, -5);
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

  return (
    <>
      {isLoaded !== 100 ? (
        <>
          <div style={{ height: "100vh", width: "100vw" }}>
            <br /> <br /> <br />
            <h2 className="text-center mt-40"> Warming Up </h2>
            <img className="center mt-52 ml-10" src={spinner} alt="loading" />
          </div>
        </>
      ) : (
        <>
          <div className="container2 mr-2">
            <h1 style={{ position: "absolute", top: "19%" }}>
              Paradise Hemp Dispensary
            </h1>
            <h5
              className="about left-40 p-4 absolute top-72 md:top-96 text-white font-bold text-base text-shadow-2xs  rounded-md border-solid border-grey max-w-55vw max-h-96 md:max-h-96 overflow-auto hidden md:block"
              style={{
                position: "absolute",
                color: "white",
                top: 260,
                fontWeight: 900,
                fontSize: 17,
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                borderRadius: 5,
                maxWidth: "55%",
                maxHeight: "340px",
                overflow: "auto",
                zIndex: 2,
              }}
            >
              At Paradise Hemp Dispensary, we believe that nature holds the key
              to well-being, and we are committed to providing our customers
              with the highest quality hemp products available. Founded with a
              passion for natural alternatives, we have curated a diverse
              selection of premium hemp products that cater to the needs of both
              seasoned enthusiasts and newcomers to the world of hemp. From
              premium CBD oils and tinctures to soothing topicals and edibles,
              our collection is thoughtfully crafted to deliver the best that
              hemp has to offer. Paradise Hemp Dispensary is not just a place to
              buy hemp products; it's a community that fosters wellness,
              sustainability, and a shared passion for nature's bountiful
              offerings. We invite you to experience the natural bliss of
              Paradise Hemp Dispensary. Join us to a happier, and more
              harmonious existence as we embrace the incredible potential of
              hemp together. Your paradise awaits!
            </h5>
          </div>{" "}
          <div style={{ marginTop: -60 }}>
            <a className="h-28 w-40 hidden md:block" href="#recentlyadded">
              <div
                style={{
                  marginBottom: 30,
                  height: 30,
                  width: 30,
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
