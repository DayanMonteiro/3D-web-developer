import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // o scene.gltf é a imagem do computador
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // mesh - Classe que representa objetos baseados em malha de polígonos triangulares.
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* da lib three -  o pointLight é o que gera a claridade na imagem na tela do computador */}
      <pointLight intensity={1} />

      {/* controlador da imagem do computador girando */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Adiciona um ouvinte para alterações no tamanho da tela
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Defina o valor inicial da variável de estado `isMobile`
    setIsMobile(mediaQuery.matches);

    // Defina uma função de callback para lidar com alterações na consulta de mídia
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Adicione a função de callbak como um ouvinte para alterações na consulta de mídia
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remova o ouvinte quando o componente for desmontado
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
