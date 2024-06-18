import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ModelHourseIdle(props: any) {
  const group: any = useRef();
  const {
    nodes,
    materials,
    animations: wavingAnimations,
  }: any = useGLTF("/models/hourse@idle.glb");

  const { actions: wavingActions } = useAnimations(wavingAnimations, group);

  useEffect(() => {
    wavingActions?.["idle"]?.play();
  }, [wavingActions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="CharacterLPlatform"
          position={[0.066, 0, 0.003]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <group
          name="CharacterRPlatform"
          position={[-0.066, 0, 0.003]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={0.01}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="HorseBody"
            geometry={nodes.HorseBody.geometry}
            material={materials["Material #25"]}
            skeleton={nodes.HorseBody.skeleton}
          />
          <skinnedMesh
            name="HorseHead"
            geometry={nodes.HorseHead.geometry}
            material={materials["Material #25"]}
            skeleton={nodes.HorseHead.skeleton}
          />
          <primitive object={nodes.Character} />
          <primitive object={nodes.CharacterPelvis} />
        </group>
      </group>
    </group>
  );
}
