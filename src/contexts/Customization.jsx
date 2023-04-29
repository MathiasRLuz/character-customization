import { createContext, useContext, useState } from "react";
const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [body, setBody] = useState(0);
  const [head, setHead] = useState(0);
  const [feet, setFeet] = useState(0);
  const [legs, setLegs] = useState(2);
  const [animationIndex, setAnimationIndex] = useState(8);
  const [totalAnimations, setTotalAnimations] = useState(0);
  const [totalBody, setTotalBody] = useState(0);
  const [totalHead, setTotalHead] = useState(0);
  const [totalFeet, setTotalFeet] = useState(0);
  const [totalLegs, setTotalLegs] = useState(0);
  const [color, setColor] = useState("#fff");
  const [material, setMaterial] = useState(null);
  const [meshName, setMeshName] = useState("");
  const [save, setSave] = useState(false);

  return (
    <CustomizationContext.Provider
      value={{
        body,
        setBody,
        head,
        setHead,
        feet,
        setFeet,
        legs,
        setLegs,
        animationIndex,
        setAnimationIndex,
        totalAnimations,
        setTotalAnimations,
        totalBody,
        setTotalBody,
        totalHead,
        setTotalHead,
        totalFeet,
        setTotalFeet,
        totalLegs,
        setTotalLegs,
        color,
        setColor,
        material,
        setMaterial,
        meshName,
        setMeshName,
        save,
        setSave,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
