import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ModelCat1(props: any) {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF("/models/cat@1.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.["dance1"]?.play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Belt"
            geometry={nodes.Belt.geometry}
            material={materials.Gold}
            skeleton={nodes.Belt.skeleton}
          />
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.Body}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="Braclets"
            geometry={nodes.Braclets.geometry}
            material={materials.Gold}
            skeleton={nodes.Braclets.skeleton}
          />
          <skinnedMesh
            name="Earing"
            geometry={nodes.Earing.geometry}
            material={materials.Gold}
            skeleton={nodes.Earing.skeleton}
          />
          <skinnedMesh
            name="Ears"
            geometry={nodes.Ears.geometry}
            material={materials.Body}
            skeleton={nodes.Ears.skeleton}
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.Eyes}
            skeleton={nodes.Eyes.skeleton}
          />
          <skinnedMesh
            name="Head"
            geometry={nodes.Head.geometry}
            material={materials.Body}
            skeleton={nodes.Head.skeleton}
          />
          <skinnedMesh
            name="Hood"
            geometry={nodes.Hood.geometry}
            material={materials.Cloth}
            skeleton={nodes.Hood.skeleton}
          />
          <skinnedMesh
            name="Nose"
            geometry={nodes.Nose.geometry}
            material={materials.Nose}
            skeleton={nodes.Nose.skeleton}
          />
          <skinnedMesh
            name="Skirt"
            geometry={nodes.Skirt.geometry}
            material={materials.Cloth}
            skeleton={nodes.Skirt.skeleton}
          />
          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.Cloth}
            skeleton={nodes.Top.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cat.glb");
