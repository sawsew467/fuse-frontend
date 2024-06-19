import { ModelHourseDance1 } from "@/components/models/ModelHourseDance1";
import { ModelHourseQuestion } from "@/components/models/ModelHourseQuestion";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Hourse() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: 300,
      }}
    >
      <ambientLight intensity={2.5} />
      <directionalLight castShadow position={[0, 10, 20]} intensity={8.5} />
      <Suspense fallback={null}>
        <ModelHourseQuestion
          position={[0, -3, 0]}
          scale={4.5}
          // rotation={[-0.3, 0.5, -0.03]}
          // rotation={[-0.2, 0.3, 0]}
          castShadow
          receiveShadow
        />
      </Suspense>
    </Canvas>
  );
}

export default Hourse;
