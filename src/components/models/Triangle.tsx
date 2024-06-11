import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Color, MeshStandardMaterial } from "three";

function Triangle(props: GroupProps) {
  const { nodes, materials }: any = useGLTF("/models/tools.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Triangle.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xd27b95),
          })
        }
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.428}
      />
    </group>
  );
}

export default Triangle;
