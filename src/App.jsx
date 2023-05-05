import { Canvas, useFrame } from "@react-three/fiber";
import ExportButton, { Man } from "./components/Man";
import { CustomizationProvider } from "./contexts/Customization";
import Configurator from "./components/Configurator";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { proxy, useSnapshot } from "valtio";
import { useCustomization } from "./contexts/Customization";

function App() {
  const { color, setColor, material, meshName } = useCustomization();
  const state = proxy({
    current: "color",
    items: {
      color: color,
    },
  });

  const handleColorChange = (color) => {
    setColor(color);
    material.color.set(color);
  };

  function Picker() {
    const snap = useSnapshot(state);
    return (
      <div style={{ display: material ? "block" : "none" }}>
        <div className="picker">
          <HexColorPicker
            color={snap.items[snap.current]}
            onChange={(color) => (state.items[snap.current] = color)}
            onMouseUp={() => handleColorChange(state.items[snap.current])}
          />
          <h3>{color}</h3>
          <h1>{meshName}</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#5d5858",
      }}
    >
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 20 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Man />
      </Canvas>
      <Picker />
      <Configurator />
      <ExportButton />
    </div>
  );
}

export default App;
