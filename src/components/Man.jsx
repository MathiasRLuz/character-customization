/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/man.glb
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export const Man = (props) => {
  const { nodes, materials, animations } = useGLTF("./models/man.glb");
  const { ref, actions, names } = useAnimations(animations);
  const {
    body,
    feet,
    head,
    legs,
    animationIndex,
    setTotalAnimations,
    setTotalBody,
    setTotalHead,
    setTotalFeet,
    setTotalLegs,
    setColor,
    setMaterial,
  } = useCustomization();
  setTotalAnimations(names.length);
  setTotalBody(9);
  setTotalFeet(9);
  setTotalHead(9);
  setTotalLegs(9);
  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => actions[names[animationIndex]].fadeOut(0.5);
  }, [animationIndex, actions, names]);

  function handlePointerDown(event) {
    setMaterial(event.object.material)
    console.log(event.object.material)
  }

  return (
    <group ref={ref} {...props} dispose={null}>
      <OrbitControls />
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />

          {/* HEAD */}
          <group name="Adventurer_Head" visible={head === 1}>
            <skinnedMesh
              name="Cube039"
              geometry={nodes.Cube039.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube039.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube039_1"
              geometry={nodes.Cube039_1.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube039_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube039_2"
              geometry={nodes.Cube039_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube039_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube039_3"
              geometry={nodes.Cube039_3.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube039_3.skeleton}
            />
          </group>
          <group name="Beach_Head" visible={head === 2}>
            <skinnedMesh
              name="Cube016"
              geometry={nodes.Cube016.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube016.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube016_1"
              geometry={nodes.Cube016_1.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube016_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube016_2"
              geometry={nodes.Cube016_2.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube016_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube016_3"
              geometry={nodes.Cube016_3.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube016_3.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube016_4"
              geometry={nodes.Cube016_4.geometry}
              material={materials.Earrings}
              skeleton={nodes.Cube016_4.skeleton}
            />
          </group>
          <group name="Casual2_Head" visible={head === 3}>
            <skinnedMesh
              name="Cube015"
              geometry={nodes.Cube015.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube015.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube015_1"
              geometry={nodes.Cube015_1.geometry}
              material={materials.Skin_Darker} /* Beard */
              skeleton={nodes.Cube015_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube015_2"
              geometry={nodes.Cube015_2.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube015_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube015_3"
              geometry={nodes.Cube015_3.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube015_3.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube015_4"
              geometry={nodes.Cube015_4.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube015_4.skeleton}
            />
          </group>
          <group name="Casual_Head" visible={head === 4}>
            <skinnedMesh
              name="Cube014"
              geometry={nodes.Cube014.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube014.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube014_1"
              geometry={nodes.Cube014_1.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube014_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube014_2"
              geometry={nodes.Cube014_2.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube014_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube014_3"
              geometry={nodes.Cube014_3.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube014_3.skeleton}
            />
          </group>
          <group name="Farmer_Head" visible={head === 5}>
            <skinnedMesh
              name="Cube032"
              geometry={nodes.Cube032.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube032.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube032_1"
              geometry={nodes.Cube032_1.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube032_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube032_2"
              geometry={nodes.Cube032_2.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube032_2.skeleton}
            />
          </group>
          <group name="King_Head" visible={head === 6}>
            <skinnedMesh
              name="Cube025"
              geometry={nodes.Cube025.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube025.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube025_1"
              geometry={nodes.Cube025_1.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube025_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube025_2"
              geometry={nodes.Cube025_2.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube025_2.skeleton}
            />
          </group>
          <group name="Punk_Head" visible={head === 7}>
            <skinnedMesh
              name="Cube026"
              geometry={nodes.Cube026.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube026.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube026_1"
              geometry={nodes.Cube026_1.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube026_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube026_2"
              geometry={nodes.Cube026_2.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube026_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube026_3"
              geometry={nodes.Cube026_3.geometry}
              material={materials.Red_Dark}
              skeleton={nodes.Cube026_3.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube026_4"
              geometry={nodes.Cube026_4.geometry}
              material={materials.Red}
              skeleton={nodes.Cube026_4.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube026_5"
              geometry={nodes.Cube026_5.geometry}
              material={materials.Earrings}
              skeleton={nodes.Cube026_5.skeleton}
            />
          </group>
          <group name="Suit_Head" visible={head === 8}>
            <skinnedMesh
              name="Cube006"
              geometry={nodes.Cube006.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube006.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube006_1"
              geometry={nodes.Cube006_1.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube006_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube006_2"
              geometry={nodes.Cube006_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Cube006_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube006_3"
              geometry={nodes.Cube006_3.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube006_3.skeleton}
            />
          </group>
          <group name="Worker_Head" visible={head === 9}>
            <skinnedMesh
              name="Cube031"
              geometry={nodes.Cube031.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube031.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube031_1"
              geometry={nodes.Cube031_1.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Cube031_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube031_2"
              geometry={nodes.Cube031_2.geometry}
              material={materials.Worker_Yellow}
              skeleton={nodes.Cube031_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube031_3"
              geometry={nodes.Cube031_3.geometry}
              material={materials.Moustache}
              skeleton={nodes.Cube031_3.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube031_4"
              geometry={nodes.Cube031_4.geometry}
              material={materials.Eye}
              skeleton={nodes.Cube031_4.skeleton}
            />
          </group>

          {/* BODY */}
          <group name="Adventurer_Body" visible={body === 1}>
            <skinnedMesh
              name="Cube063"
              geometry={nodes.Cube063.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube063.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube063_1"
              geometry={nodes.Cube063_1.geometry}
              material={materials.Green}
              skeleton={nodes.Cube063_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube063_2"
              geometry={nodes.Cube063_2.geometry}
              material={materials.LightGreen}
              skeleton={nodes.Cube063_2.skeleton}
            />
          </group>
          <group name="Beach_Body" visible={body === 2}>
            <skinnedMesh
              name="Cube070"
              geometry={nodes.Cube070.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube070.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube070_1"
              geometry={nodes.Cube070_1.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Cube070_1.skeleton}
            />
          </group>
          <group name="Casual2_Body" visible={body === 3}>
            <skinnedMesh
              name="Cube010"
              geometry={nodes.Cube010.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube010.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube010_1"
              geometry={nodes.Cube010_1.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Cube010_1.skeleton}
            />
          </group>
          <group name="Casual_Body" visible={body === 4}>
            <skinnedMesh
              name="Cube008"
              geometry={nodes.Cube008.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube008.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube008_1"
              geometry={nodes.Cube008_1.geometry}
              material={materials.Purple}
              skeleton={nodes.Cube008_1.skeleton}
            />
          </group>
          <group name="Farmer_Body" visible={body === 5}>
            <skinnedMesh
              name="Cube036"
              geometry={nodes.Cube036.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube036.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube036_1"
              geometry={nodes.Cube036_1.geometry}
              material={materials.LightBlue}
              skeleton={nodes.Cube036_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube036_2"
              geometry={nodes.Cube036_2.geometry}
              material={materials.Beige}
              skeleton={nodes.Cube036_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube036_3"
              geometry={nodes.Cube036_3.geometry}
              material={materials.Beige}
              skeleton={nodes.Cube036_3.skeleton}
            />
          </group>
          <group name="King_Body" visible={body === 6}>
            <skinnedMesh
              name="Cube043"
              geometry={nodes.Cube043.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube043.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube043_1"
              geometry={nodes.Cube043_1.geometry}
              material={materials.Blue}
              skeleton={nodes.Cube043_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube043_2"
              geometry={nodes.Cube043_2.geometry}
              material={materials.Metal}
              skeleton={nodes.Cube043_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube043_3"
              geometry={nodes.Cube043_3.geometry}
              material={materials.Beige}
              skeleton={nodes.Cube043_3.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube043_4"
              geometry={nodes.Cube043_4.geometry}
              material={materials.Metal_Dark}
              skeleton={nodes.Cube043_4.skeleton}
            />
          </group>
          <group name="Punk_Body" visible={body === 7}>
            <skinnedMesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube001.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube001_1"
              geometry={nodes.Cube001_1.geometry}
              material={materials.White}
              skeleton={nodes.Cube001_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube001_2"
              geometry={nodes.Cube001_2.geometry}
              material={materials.Black}
              skeleton={nodes.Cube001_2.skeleton}
            />
          </group>
          <group name="Suit_Body" visible={body === 8}>
            <skinnedMesh
              name="Cube007"
              geometry={nodes.Cube007.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube007.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube007_1"
              geometry={nodes.Cube007_1.geometry}
              material={materials.Tie}
              skeleton={nodes.Cube007_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube007_2"
              geometry={nodes.Cube007_2.geometry}
              material={materials.Suit}
              skeleton={nodes.Cube007_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube007_3"
              geometry={nodes.Cube007_3.geometry}
              material={materials.White}
              skeleton={nodes.Cube007_3.skeleton}
            />
          </group>
          <group name="Worker_Body" visible={body === 9}>
            <skinnedMesh
              name="Cube027"
              geometry={nodes.Cube027.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube027.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube027_1"
              geometry={nodes.Cube027_1.geometry}
              material={materials.Worker_Yellow}
              skeleton={nodes.Cube027_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube027_2"
              geometry={nodes.Cube027_2.geometry}
              material={materials.Worker_Vest}
              skeleton={nodes.Cube027_2.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube027_3"
              geometry={nodes.Cube027_3.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Cube027_3.skeleton}
            />
          </group>

          {/* LEGS */}
          <group name="Adventurer_Legs" visible={legs === 1}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube020"
              geometry={nodes.Cube020.geometry}
              material={materials.Brown}
              skeleton={nodes.Cube020.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube020_1"
              geometry={nodes.Cube020_1.geometry}
              material={materials.Brown2}
              skeleton={nodes.Cube020_1.skeleton}
            />
          </group>
          <group name="Beach_Legs" visible={legs === 2}>
            <skinnedMesh
              name="Cube022"
              geometry={nodes.Cube022.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube022.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube022_1"
              geometry={nodes.Cube022_1.geometry}
              material={materials.Red_Dark}
              skeleton={nodes.Cube022_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube022_2"
              geometry={nodes.Cube022_2.geometry}
              material={materials.White}
              skeleton={nodes.Cube022_2.skeleton}
            />
          </group>
          <skinnedMesh
            onClick={handlePointerDown}
            name="Casual2_Legs"
            geometry={nodes.Casual2_Legs.geometry}
            material={materials.LightBlue}
            skeleton={nodes.Casual2_Legs.skeleton}
            visible={legs === 3}
          />
          <group name="Casual_Legs" visible={legs === 4}>
            <skinnedMesh
              name="Cube005"
              geometry={nodes.Cube005.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube005.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube005_1"
              geometry={nodes.Cube005_1.geometry}
              material={materials.LightBlue}
              skeleton={nodes.Cube005_1.skeleton}
            />
          </group>
          <skinnedMesh
            onClick={handlePointerDown}
            name="Farmer_Pants"
            geometry={nodes.Farmer_Pants.geometry}
            material={materials.LightBlue}
            skeleton={nodes.Farmer_Pants.skeleton}
            visible={legs === 5}
          />
          <group name="King_Legs" visible={legs === 6}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube051"
              geometry={nodes.Cube051.geometry}
              material={materials.DarkBrown}
              skeleton={nodes.Cube051.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube051_1"
              geometry={nodes.Cube051_1.geometry}
              material={materials.Metal}
              skeleton={nodes.Cube051_1.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube051_2"
              geometry={nodes.Cube051_2.geometry}
              material={materials.Metal_Dark}
              skeleton={nodes.Cube051_2.skeleton}
            />
          </group>
          <group name="Punk_Legs" visible={legs === 7}>
            <skinnedMesh
              name="Cube009"
              geometry={nodes.Cube009.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube009.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube009_1"
              geometry={nodes.Cube009_1.geometry}
              material={materials.LightBlue}
              skeleton={nodes.Cube009_1.skeleton}
            />
          </group>
          <skinnedMesh
            onClick={handlePointerDown}
            name="Suit_Legs"
            geometry={nodes.Suit_Legs.geometry}
            material={materials.Suit}
            skeleton={nodes.Suit_Legs.skeleton}
            visible={legs === 8}
          />
          <group name="Worker_Legs" visible={legs === 9}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube029"
              geometry={nodes.Cube029.geometry}
              material={materials.Brown}
              skeleton={nodes.Cube029.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube029_1"
              geometry={nodes.Cube029_1.geometry}
              material={materials.Brown2}
              skeleton={nodes.Cube029_1.skeleton}
            />
          </group>

          {/* FEET */}
          <group name="Adventurer_Feet" visible={feet === 1}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube052"
              geometry={nodes.Cube052.geometry}
              material={materials.Grey}
              skeleton={nodes.Cube052.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube052_1"
              geometry={nodes.Cube052_1.geometry}
              material={materials.Black}
              skeleton={nodes.Cube052_1.skeleton}
            />
          </group>
          <group name="Beach_Feet" visible={feet === 2}>
            <skinnedMesh
              name="Cube017"
              geometry={nodes.Cube017.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube017.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube017_1"
              geometry={nodes.Cube017_1.geometry}
              material={materials.Red_Dark}
              skeleton={nodes.Cube017_1.skeleton}
            />
          </group>
          <group name="Casual2_Feet" visible={feet === 3}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube003"
              geometry={nodes.Cube003.geometry}
              material={materials.Red_Dark}
              skeleton={nodes.Cube003.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube003_1"
              geometry={nodes.Cube003_1.geometry}
              material={materials.White}
              skeleton={nodes.Cube003_1.skeleton}
            />
          </group>
          <group name="Casual_Feet" visible={feet === 4}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube000"
              geometry={nodes.Cube000.geometry}
              material={materials.Purple}
              skeleton={nodes.Cube000.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube000_1"
              geometry={nodes.Cube000_1.geometry}
              material={materials.White}
              skeleton={nodes.Cube000_1.skeleton}
            />
          </group>
          <group name="Farmer_Feet" visible={feet === 5}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube035"
              geometry={nodes.Cube035.geometry}
              material={materials.Brown}
              skeleton={nodes.Cube035.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube035_1"
              geometry={nodes.Cube035_1.geometry}
              material={materials.Brown2}
              skeleton={nodes.Cube035_1.skeleton}
            />
          </group>
          <skinnedMesh
            onClick={handlePointerDown}
            name="King_Feet"
            geometry={nodes.King_Feet.geometry}
            material={materials.Metal}
            skeleton={nodes.King_Feet.skeleton}
            visible={feet === 6}
          />
          <group name="Punk_Feet" visible={feet === 7}>
            <skinnedMesh
              name="Cube208"
              geometry={nodes.Cube208.geometry}
              material={materials.Skin}
              skeleton={nodes.Cube208.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube208_1"
              geometry={nodes.Cube208_1.geometry}
              material={materials.Black}
              skeleton={nodes.Cube208_1.skeleton}
            />
          </group>
          <skinnedMesh
            onClick={handlePointerDown}
            name="Suit_Feet"
            geometry={nodes.Suit_Feet.geometry}
            material={materials.Black}
            skeleton={nodes.Suit_Feet.skeleton}
            visible={feet === 8}
          />
          <group name="Worker_Feet" visible={feet === 9}>
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube028"
              geometry={nodes.Cube028.geometry}
              material={materials.Grey}
              skeleton={nodes.Cube028.skeleton}
            />
            <skinnedMesh
              onClick={handlePointerDown}
              name="Cube028_1"
              geometry={nodes.Cube028_1.geometry}
              material={materials.Black}
              skeleton={nodes.Cube028_1.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./models/man.glb");
