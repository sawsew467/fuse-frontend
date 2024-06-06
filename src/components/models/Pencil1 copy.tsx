import { useGLTF } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

function Tape() {
  const { nodes }: any = useGLTF("/models/tools.glb");
  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.01}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_6.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xd6be99),
          })
        }
        position={[0, 3.178, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_5.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xc6d4ba),
          })
        }
        position={[0, 3.095, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

export default Tape;
