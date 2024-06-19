import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

export function Experience() {
  const { nodes, materials }: any = useGLTF("/models/tools.glb");
  return (
    <group dispose={null}>
      <group scale={0.01} rotation-x={-Math.PI / 2}>
        <group
          position={[-16.127, 53.831, -94.55]}
          rotation={[-0.359, 1.33, -0.932]}
          scale={[1.847, 3.361, 3.073]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_12.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xe4c36a),
              })
            }
            position={[2.731, -60.024, -28.132]}
            rotation={[1.008, -1.426, -0.29]}
            scale={[0.361, 0.398, 0.659]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xd7d8d9),
              })
            }
            position={[-22.698, 32.77, 1.793]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xd7d8d9),
              })
            }
            position={[-0.318, 0.865, 0.731]}
            rotation={[0.002, 0.001, 0]}
            scale={[0.994, 1.008, 0.998]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4_1.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0x9cb256),
              })
            }
            position={[-16.676, -0.273, 9.748]}
            rotation={[0.002, 0.001, 0]}
            scale={[0.994, 1.008, 0.998]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dodecahedron.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0x889fc6),
            })
          }
          position={[192.21, 47.256, -519.914]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group position={[429.663, 5.332, -321.998]} scale={1.355}>
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
        <group position={[-385.625, 161.045, -238.728]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Merged_Geometry.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0x94ac6a),
              })
            }
            position={[1.878, 22.368, 6.709]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_10.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0x69964c),
              })
            }
            position={[2.627, -12.535, 0.828]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xc6d4ba),
              })
            }
            position={[0, -80.211, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
        </group>
        <group position={[384.921, 29.323, -145.325]} rotation={[0, -0.241, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.metal.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xc6c6c6),
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
        <group
          position={[358.63, 29.323, 213.609]}
          rotation={[-Math.PI, -0.642, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.metal_1.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xc6c6c6),
              })
            }
            position={[-118.459, 8.356, -6.09]}
            rotation={[-1.992, -0.029, -1.548]}
            scale={[0.504, 0.366, 0.504]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.graffit_1.geometry}
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
            geometry={nodes.rubber_1.geometry}
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
            geometry={nodes.pencil_1.geometry}
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
        <group position={[250.43, 12.764, 101.016]}>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rule.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0x889fc6),
            })
          }
          position={[-449.205, 16.971, -27.705]}
          rotation={[0, -0.578, 0]}
          scale={0.675}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Triangle.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0xd27b95),
            })
          }
          position={[134.826, 2.813, 248.6]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.428}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_6.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0xd27b95),
            })
          }
          position={[-323.247, 1.427, -37.336]}
          rotation={[-Math.PI / 2, 0, -1.297]}
          scale={0.428}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_4.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0x9cb256),
            })
          }
          position={[273.393, 12.44, -61.066]}
          rotation={[-Math.PI / 2, 0, -1.297]}
          scale={0.428}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0xe4c36a),
            })
          }
          position={[337.516, 1.237, 45.269]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.428}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pentagon.geometry}
          material={
            new MeshStandardMaterial({
              color: new Color(0xea6f87),
            })
          }
          position={[-157.722, 1.237, 27.045]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.428}
        />
        <group
          position={[-328.36, 19.621, 238.789]}
          rotation={[0, 0.924, 0]}
          scale={2.303}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paper.geometry}
            material={
              new MeshStandardMaterial({
                color: new Color(0xe4c36a),
              })
            }
            position={[-10.433, 9.852, 13.086]}
            scale={[1.522, 0.031, 1.522]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={nodes.body.material}
            position={[-10.433, 4.705, 13.086]}
            scale={1.522}
          />
        </group>
      </group>
    </group>
  );
}

