import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Color, MeshStandardMaterial } from "three";

function Pencil1(props: GroupProps) {
  const { nodes }: any = useGLTF("/models/tools.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.metal.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xc6c6c6),
            lightMapIntensity: 60,
          })
        }
        position={[-118.459, 8.356, -6.09]}
        rotation={[-1.992, -0.029, -1.548]}
        scale={[0.504, 0.366, 0.504]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.graffit.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0x6b6666),
          })
        }
        position={[-4.42, 9.785, -9.568]}
        rotation={[2.721, -0.024, -1.599]}
        scale={[0.511, 1.237, 0.511]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rubber.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xc97171),
          })
        }
        position={[-144.365, 7.822, -4.855]}
        rotation={[1.147, 0.022, 1.553]}
        scale={0.516}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pencil.geometry}
        material={
          new MeshStandardMaterial({
            color: new Color(0xcfab93),
          })
        }
        position={[-3.66, 9.928, -9.305]}
        rotation={[2.72, -0.023, -1.6]}
        scale={[0.511, 1.233, 0.511]}
      />
    </group>
  );
}

export default Pencil1;
