import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ModelHourseDance1(props: any) {
  const group: any = useRef();
  const {
    nodes,
    materials,
    animations: wavingAnimations,
  }: any = useGLTF("/models/hourse@dance1.glb");
  const { animations: runningAnimations }: any = useGLTF(
    "/models/hourse@running.glb",
  );

  const { actions: wavingActions } = useAnimations(wavingAnimations, group);
  const { actions: runningActions } = useAnimations(runningAnimations, group);

  useEffect(() => {
    runningActions?.["running"]?.play();
    setTimeout(() => {
      runningActions?.["running"]?.fadeOut(2);
    }, 2000);
    setTimeout(() => {
      wavingActions?.["dance"]?.fadeIn(2);
      wavingActions?.["dance"]?.play();
    }, 4000);
  }, [runningActions, wavingActions]);

  useEffect(() => {
    group?.current?.scale?.set(2, 2, 2);
  }, []);

  useFrame((state, delta) => {
    if (group?.current?.scale?.x >= 4.5) {
      return;
    }

    group?.current?.scale?.set(
      group.current.scale.x + 0.015,
      group.current.scale.y + 0.015,
      group.current.scale.z + 0.015,
    );
  });

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
