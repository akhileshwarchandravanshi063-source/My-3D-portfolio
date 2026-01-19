import React, { useState, useEffect } from "react";
import { Room } from "./Room.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const HeroExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 0, isMobile ? 10 : 8],
        fov: isMobile ? 50 : 45
      }}
      gl={{ antialias: true }}
    >
      {/* Ambient lighting - significantly brighter */}
      <ambientLight intensity={1.2} color="#ffffff" />

      {/* Main directional light from front-left (like window light) - much brighter */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={3.5}
        color="#ffffff"
        castShadow
      />

      {/* Fill light from opposite side - brighter */}
      <directionalLight
        position={[-4, 6, -4]}
        intensity={1.8}
        color="#d9ecff"
      />

      {/* Additional fill light from top */}
      <directionalLight
        position={[0, 10, 0]}
        intensity={2.0}
        color="#ffffff"
      />

      {/* Point light for accent (like desk lamp) - brighter */}
      <pointLight
        position={[2, 4, 2]}
        intensity={2.5}
        color="#ffffff"
        distance={15}
      />

      {/* Additional point light for more illumination */}
      <pointLight
        position={[-2, 5, -2]}
        intensity={1.5}
        color="#d9ecff"
        distance={12}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        enableRotate={!isMobile}
        maxDistance={isMobile ? 7 : 6}
        minDistance={isMobile ? 7 : 6}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate={false}
      />

      <group
        position={[0, isMobile ? 1 : 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={isMobile ? 4 : isTablet ? 3.5 : 2.1}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
