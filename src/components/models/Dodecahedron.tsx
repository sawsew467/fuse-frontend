import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Color, MeshStandardMaterial } from "three";

function DodecahedronModel(props: GroupProps) {
  const { nodes }: any = useGLTF("/models/tools.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dodecahedron.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0x889fc6),
          })
        }
      />
    </group>
  );
}

export default DodecahedronModel;
