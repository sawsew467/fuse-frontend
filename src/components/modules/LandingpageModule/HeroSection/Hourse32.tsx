import { ModelHourseDance } from "@/components/models/ModelHourseDance";
import { ModelHourseWaving } from "@/components/models/ModelHourseWaving";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Hourse32() {
  return (
    <Canvas
      style={{
        width: 118,
        height: 135,
      }}
    >
      <ambientLight intensity={2.5} />
      <directionalLight castShadow position={[0, 10, 20]} intensity={8.5} />
      <Suspense fallback={null}>
        <ModelHourseDance
          position={[0, -3, 0]}
          scale={4.5}
          castShadow
          receiveShadow
        />
      </Suspense>
    </Canvas>
  );
}

export default Hourse32;
