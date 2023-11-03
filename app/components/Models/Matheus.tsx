import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations, Text, Float } from "@react-three/drei";


export function Matheus(props: any) {
  const group = useRef();
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF("/3dModels/boneco-teste-1.glb");
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const sw = window?.navigator?.serviceWorker

      if (sw) {
        sw.register("/sw.js", { scope: "/" }).then((registration) => {
          console.log("Service Worker registration successful with scope: ", registration.scope);
        }).catch((err) => {
          console.log("Service Worker registration failed: ", err);
        });
      }
    }
  })

  useEffect(() => {
    console.log(actions)
    const action = actions.MixamoDefault
    action?.play()
    // console.log(nodes)
  }, [])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Boneco">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />

{/* 
          <group name="outfit-1">
            <skinnedMesh
              name="Wolf3D_1_Body"
              geometry={nodes.Wolf3D_1_Body.geometry}
              material={materials["Wolf3D_Body.002"]}
              skeleton={nodes.Wolf3D_1_Body.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_1_Outfit_Bottom"
              geometry={nodes.Wolf3D_1_Outfit_Bottom.geometry}
              material={materials["Wolf3D_Outfit_Bottom.002"]}
              skeleton={nodes.Wolf3D_1_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_1_Outfit_Top"
              geometry={nodes.Wolf3D_1_Outfit_Top.geometry}
              material={materials["Wolf3D_Outfit_Top.002"]}
              skeleton={nodes.Wolf3D_1_Outfit_Top.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_1_Outfit_Footwear"
              geometry={nodes.Wolf3D_1_Outfit_Footwear.geometry}
              material={materials["Wolf3D_Outfit_Footwear.002"]}
              skeleton={nodes.Wolf3D_1_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_3_Glasses"
              geometry={nodes.Wolf3D_3_Glasses.geometry}
              material={materials["Wolf3D_Glasses.001"]}
              skeleton={nodes.Wolf3D_3_Glasses.skeleton}
            />
            
          </group> */}
          <group name="outfit-3">
            <skinnedMesh
              name="Wolf3D_3_Body"
              geometry={nodes.Wolf3D_3_Body.geometry}
              material={materials["Wolf3D_Body.001"]}
              skeleton={nodes.Wolf3D_3_Body.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_3_Glasses"
              geometry={nodes.Wolf3D_3_Glasses.geometry}
              material={materials["Wolf3D_Glasses.001"]}
              skeleton={nodes.Wolf3D_3_Glasses.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_3_Outfit_Top"
              geometry={nodes.Wolf3D_3_Outfit_Top.geometry}
              material={materials["Wolf3D_Outfit_Top.001"]}
              skeleton={nodes.Wolf3D_3_Outfit_Top.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_3_Outfit_Bottom"
              geometry={nodes.Wolf3D_3_Outfit_Bottom.geometry}
              material={materials["Wolf3D_Outfit_Bottom.001"]}
              skeleton={nodes.Wolf3D_3_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_3_Outfit_Footwear"
              geometry={nodes.Wolf3D_3_Outfit_Footwear.geometry}
              material={materials["Wolf3D_Outfit_Footwear.001"]}
              skeleton={nodes.Wolf3D_3_Outfit_Footwear.skeleton}
            />
          </group>

          
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/3dModels/boneco-teste-1.glb");
