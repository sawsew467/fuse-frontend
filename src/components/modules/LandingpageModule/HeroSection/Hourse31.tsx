import { ModelHourseWaving } from "@/components/models/ModelHourseWaving";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Hourse31() {
  return (
    <Canvas
      style={{
        width: 118,
        height: 135,
      }}
    >
      {/* <OrbitControls /> */}
      <ambientLight intensity={2.5} />
      <directionalLight castShadow position={[0, 10, 20]} intensity={8.5} />
      <Suspense fallback={null}>
        <ModelHourseWaving
          position={[0, -3, 0]}
          scale={4.5}
          castShadow
          receiveShadow
        />
      </Suspense>
    </Canvas>
  );
}

export default Hourse31;
