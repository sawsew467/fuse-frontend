import { useGLTF } from "@react-three/drei";

import BookModel from "@/components/models/BookModel";
import StickyNote from "@/components/models/StickyNote";
import Pencil1 from "@/components/models/Pencil1";
import Tape from "@/components/models/Pencil1 copy";

export function Experience() {
  return (
    <>
      <group position={[0, 0, 0]}>
        <group rotation={[-0.5, 1.5, 0]} position={[-4.5, 2, 0]}>
          <BookModel />
        </group>
        <group rotation={[0.7, 1.74, 0]} position={[4, 2, 0]}>
          <StickyNote />
        </group>
        <group rotation={[1, -0.5, -0.5]} position={[-4.5, -2.7, 0]}>
          <Pencil1 />
        </group>
        <group rotation={[0.2, 0, 0]} position={[4.3, -2, 0]}>
          <Tape />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/scene (7).glb");
