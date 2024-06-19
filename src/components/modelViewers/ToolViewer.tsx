"use client";

import { OrbitControls, OrbitControlsProps } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { animateWithGsapTimeline } from "@/utils/animateGSAP";

interface ToolViewerProps {
  orbitControlsProps?: OrbitControlsProps;
  width?: number;
  height?: number;
  children: React.ReactNode;
  mode: "SIGNIN" | "SIGNUP";
}

function ToolViewer({
  width = 200,
  height = 200,
  children,
  orbitControlsProps,
  mode,
}: ToolViewerProps) {
  const ref: any = useRef();

  useEffect(() => {
    animateWithGsapTimeline(ref);
  }, [mode]);
  return (
    <Canvas
      style={{
        width,
        height,
      }}
      shadows
    >
      <OrbitControls
        ref={ref}
        autoRotate
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotateSpeed={0.6}
        target={new THREE.Vector3(0, 0, 0)}
        {...orbitControlsProps}
      />
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={2.5} />
      <Suspense>{children}</Suspense>
    </Canvas>
  );
}

export default ToolViewer;
