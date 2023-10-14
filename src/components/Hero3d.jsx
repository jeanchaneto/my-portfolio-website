import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Hero3d() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Atom />
      </Float>
      <EffectComposer>
        <Bloom luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
}

function Atom(props) {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  const scaleValue = 2;
  return (
    <group {...props} scale={[scaleValue, scaleValue, scaleValue]}>
      <Line worldUnits points={points} color={[1, 3, 10]} lineWidth={0.2} />
      <Line
        worldUnits
        points={points}
        color={[1, 3, 10]}
        lineWidth={0.2}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color={[1, 3, 10]}
        lineWidth={0.2}
        rotation={[0, 0, -1]}
      />
      <Electron position={[0, 0, 0.5]} speed={3} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={3.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={5}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[1, 3, 10]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.2]} />
        <meshBasicMaterial color={[1, 3, 10]} toneMapped={false} />
      </mesh>
    </group>
  );
}
