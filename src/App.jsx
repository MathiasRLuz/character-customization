import { Canvas, useFrame } from "@react-three/fiber";
import { Man } from "./components/Man";
import { CustomizationProvider } from "./contexts/Customization";
import Configurator from "./components/Configurator";
function App() {
  return (
    <CustomizationProvider>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#5d5858",
        }}
      >
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 20}}>
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
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
