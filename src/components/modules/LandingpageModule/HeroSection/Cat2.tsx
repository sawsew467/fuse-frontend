import { ModelCat2 } from "@/components/models/ModelCat2";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Cat2() {
  return (
    <Canvas
      style={{
        width: 280,
        height: 320,
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={2.5} />
      <Suspense fallback={null}>
        <ModelCat2 position={[0, -3, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default Cat2;
