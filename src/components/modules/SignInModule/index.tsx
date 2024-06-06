"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import SignUpCard from "./SignUpCard";
import SignInCard from "./SignInCard";
import { Experience } from "./Experience";
import { OrbitControls } from "@react-three/drei";

function SignInModule() {
  const [mode, setMode] = useState<"SIGNIN" | "SIGNUP">("SIGNIN");
  console.log("🚀 ~ SignInModule ~ mode:", mode);

  return (
    <>
      <Canvas className="fixed bottom-0 left-0 right-0 top-0 z-10">
        <ambientLight intensity={2} />
        <directionalLight position={[0, 10, 0]} intensity={2.5} />
        {/* <axesHelper position={[0, 0, 0]} args={[50]} /> */}
        <Experience />
        <OrbitControls />
      </Canvas>
      <section className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center">
        <SignInCard mode={mode} setMode={setMode} />
        <SignUpCard mode={mode} setMode={setMode} />
      </section>
    </>
  );
}

export default SignInModule;
