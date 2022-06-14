import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BakeShadows, Environment, PerspectiveCamera } from "@react-three/drei";

function Cylinder(props) {
  const ref = useRef();

  const speed = 0.4;

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[4.5, 4.5, 0.12, 64]} />
      <meshStandardMaterial
        color={"#045cfc"}
        roughness={0.15}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

// function Torus(props) {
//   const ref = useRef();

//   const speed = 0.4;

//   useFrame((state, delta) => {
//     ref.current.rotation.z += 0.002;
//     // ref.current.rotation.x += 0.001;
//     ref.current.rotation.x += 0.0005;
//     ref.current.rotation.y += 0.0005;
//   });

//   return (
//     <mesh {...props} ref={ref}>
//       <torusGeometry args={[3.5, 0.2, 3, 128]} />
//       <meshStandardMaterial color={"#045cfc"} envMapIntensity={1.5} />
//     </mesh>
//   );
// }

function Sphere(props) {
  const ref = useRef();

  return (
    <mesh {...props} ref={ref} receiveShadow>
      <sphereGeometry args={[2.2, 64, 32]} />
      <meshStandardMaterial color={"#2421ab"} roughness={0.5} />
    </mesh>
  );
}

function ThreeDee(props) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault {...props}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 15, -10]} castShadow intensity={4} />
        <Sphere castShadow position={[-3.2, -1.5, -7]} />
        {/* <Torus position={[-3, -1.5, 0]} rotation={[1.6, 0, 0]} /> */}
        <Cylinder
          receiveShadow
          position={[-3.2, -1.5, -7]}
          rotation={[-0.05, 0, 0.1]}
        />
        <Environment preset="night" />
        <BakeShadows />
      </PerspectiveCamera>
    </Canvas>
  );
}

export default ThreeDee;
