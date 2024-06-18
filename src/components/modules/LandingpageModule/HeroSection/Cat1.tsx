import { ModelCat1 } from "@/components/models/ModelCat1";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Cat1() {
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
        <ModelCat1 position={[0, -3, 0]} castShadow receiveShadow />
      </Suspense>
    </Canvas>
  );
}

export default Cat1;
