import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Color, MeshStandardMaterial } from "three";

function RuleModel(props: GroupProps) {
  const { nodes, materials }: any = useGLTF("/models/tools.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rule.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0x889fc6),
          })
        }
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={1}
      />
    </group>
  );
}

export default RuleModel;
