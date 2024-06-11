import { OrthographicCamera, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Color, MeshStandardMaterial } from "three";

function CoffeeModel(props: GroupProps) {
  const { nodes, materials }: any = useGLTF("/models/tools.glb");
  return (
    <group {...props}>
      <group scale={1.355}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coffe.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0x806153),
            })
          }
          position={[-4.933, 32.18, 3.296]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.937}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handle.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0xc6d4ba),
            })
          }
          position={[36.804, 40.731, 2.103]}
          rotation={[0, 0, -Math.PI]}
          scale={1.805}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bodycup.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0xc6d4ba),
            })
          }
          position={[-5.388, 35.499, 3.147]}
          scale={1.603}
        />
      </group>
    </group>
  );
}

export default CoffeeModel;
