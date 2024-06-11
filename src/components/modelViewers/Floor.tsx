export default function Floor() {
  return (
    <mesh rotation={[0, 0, 0]} receiveShadow position={[0, 2, -5]}>
      <circleGeometry args={[10]} />
      <meshStandardMaterial />
    </mesh>
  );
}
