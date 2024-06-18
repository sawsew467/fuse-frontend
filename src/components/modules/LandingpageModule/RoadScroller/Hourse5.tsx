import { ModelHourseDanceRunning } from "@/components/models/ModelHourseDanceRunning";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Hourse() {
  return (
    <Canvas
      style={{
        width: 180,
        height: 180,
      }}
    >
      <ambientLight intensity={2.5} />
      <directionalLight castShadow position={[0, 10, 20]} intensity={8.5} />
      <Suspense fallback={null}>
        <ModelHourseDanceRunning
          position={[0, -3, 0]}
          scale={4.5}
          rotation={[0, Math.PI / 2 - 0.5, 0]}
          castShadow
          receiveShadow
        />
      </Suspense>
    </Canvas>
  );
}

export default Hourse;
