import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BakeShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";

import metal from "../images/metal.jpg";

function Cylinder(props) {
  const ref = useRef();
  const speed = 0.002;
  const base = new THREE.TextureLoader().load(metal);

  useFrame((state, delta) => {
    ref.current.rotation.y += speed;
  });

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[4.2, 4.2, 0.01, 128]} />
      <meshStandardMaterial
        color={"#045cfc"}
        map={base}
        roughness={0.2}
        metalness={0.2}
        envMapIntensity={0.6}
      />
    </mesh>
  );
}

function Sphere(props) {
  const ref = useRef();

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[2.2, 64, 32]} />
      <meshStandardMaterial
        color={"#2421ab"}
        roughness={0.4}
        metalness={0.5}
        envMapIntensity={0.9}
      />
    </mesh>
  );
}

function LightSource() {
  const ref = useRef();

  // useFrame((state, delta) => {
  //   ref.current.position.z = pingpong(10, delta * 3);
  // });

  return (
    <directionalLight
      ref={ref}
      color="#045cfc"
      position={[10, 15, -15]}
      intensity={1}
    />
  );
}

function ThreeDee(props) {
  const left = -3;

  return (
    <Canvas>
      <PerspectiveCamera makeDefault {...props}></PerspectiveCamera>
      {/* <fog attach="fog" color="#ff7b9b" near={1} far={20} /> */}
      <ambientLight intensity={0.7} />
      <LightSource />
      <Sphere position={[left, -1.5, -7]} />
      <Cylinder position={[left, -1.5, -7]} rotation={[-0.05, 0, 0.1]} />
      <Environment preset="night" />
      <BakeShadows />
      {/* <EffectComposer multisampling={0} disableNormalPass={true}>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={1}
          height={300}
          opacity={0.5}
        />
        <Vignette eskil={false} offset={0.2} darkness={0.7} />
      </EffectComposer> */}
    </Canvas>
  );
}

export default ThreeDee;
