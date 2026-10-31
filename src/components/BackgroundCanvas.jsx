"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const groupRef = useRef();
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const count = 900;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      data[i3] = (Math.random() - 0.5) * 18;
      data[i3 + 1] = (Math.random() - 0.5) * 12;
      data[i3 + 2] = (Math.random() - 0.5) * 14;
    }

    return data;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        state.pointer.x * 1.5,
        0.03,
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -state.pointer.y * 1.2,
        0.03,
      );
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.pointer.y * 0.25 + t * 0.08;
      pointsRef.current.rotation.y = state.pointer.x * 0.35 + t * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#dfeaff"
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <Sparkles
        count={200}
        scale={[18, 10, 10]}
        size={1.6}
        speed={0.28}
        opacity={0.8}
        color="#ffca7a"
      />
    </group>
  );
}

function OrbitingMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (!meshRef.current) return;

    meshRef.current.rotation.x = state.pointer.y * 0.35 + t * 0.28;
    meshRef.current.rotation.y = state.pointer.x * 0.65 + t * 0.22;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      state.pointer.x * 2,
      0.05,
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      -state.pointer.y * 1.5,
      0.05,
    );
  });

  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, 0, -1.75]}>
        <torusKnotGeometry args={[1.6, 0.18, 90, 18]} />
        <meshStandardMaterial
          color="#8bc8ff"
          emissive="#6cb4ff"
          emissiveIntensity={0.6}
          metalness={0.7}
          roughness={0.18}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function BackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={0.8} color="#d8e7ff" />
      <pointLight position={[-3, 2, 4]} intensity={1.2} distance={12} color="#ffae7b" />
      <ParticleField />
      <OrbitingMesh />
    </>
  );
}

export default function BackgroundCanvas() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, rgba(17, 23, 38, 0.28), rgba(5, 7, 10, 0.96) 52%, rgba(5, 7, 10, 1) 100%)",
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        flat
      >
        <BackgroundScene />
      </Canvas>
    </div>
  );
}
