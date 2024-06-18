import { ModelHourseDance1 } from "@/components/models/ModelHourseDance1";
import { ModelHourseDance2 } from "@/components/models/ModelHourseDance2";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Hourse2() {
  return (
    <Canvas
      style={{
        width: 400,
        height: 320,
      }}
    >
      <ambientLight intensity={2.5} />
      <directionalLight castShadow position={[0, 10, 20]} intensity={8.5} />
      <Suspense fallback={null}>
        <ModelHourseDance2
          position={[0, -3, 0]}
          scale={4.5}
          castShadow
          receiveShadow
        />
      </Suspense>
    </Canvas>
  );
}

export default Hourse2;
