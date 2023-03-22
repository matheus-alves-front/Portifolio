"use client"
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";

export function Portifolio3D(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF(
    "/3dModels/portifolio-Matheus-animacao.glb"
  );
  const animation = useAnimations(animations, group);

  useEffect(() => {
    const action = animation.actions.Codando
    action.play()
  }, [])

  return (
    <group ref={group} {...props} position-y={-.7} position-x={0} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0.024832, -0.50716811, 0.30300051]}
          rotation={[Math.PI, -6e-8, Math.PI]}
        >
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
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
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
        </group>
        <group
          name="Sketchfab_model"
          position={[-0.02257901, 0.720631, -0.40720537]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.00183184, 0.00156288, 0.00168541]}
        >
          <group
            name="eda352ebf8e8448da670d2ad9af8449dfbx"
            position={[0, -0.00001762, -0.00004888]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode" position={[0, -0.00000574, -0.00002036]}>
              <group
                name="Cube"
                position={[0, -0.00000574, -0.00002036]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100, 99.99998474, 99.99998474]}
              >
                <mesh
                  name="Cube_LightMat_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_LightMat_0.geometry}
                  material={materials.LightMat}
                />
                <mesh
                  name="Cube_Keyboard_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Keyboard_0.geometry}
                  material={materials["Keyboard.001"]}
                  position={[0, -0.77713495, 0]}
                />
                <mesh
                  name="Cube_PC_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_PC_0.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Cube_Screen_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Screen_0.geometry}
                  material={materials.Screen}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[0.39646536, 0.708143, -0.0496242]}
          rotation={[Math.PI / 2, 2.8e-7, -1.64661043]}
          scale={[-0.00113554, -0.00125603, -0.00088634]}
        >
          <group
            name="Mouseobjcleanergles"
            position={[-31.10759926, -30.71436119, -1.8851229]}
          >
            <group
              name="Object_2"
              position={[0.00000751, -0.0000357, -0.00005204]}
            >
              <mesh
                name="Object_3"
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.Material__2}
                position={[0.00000942, -0.00003523, -0.00005204]}
              />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          position={[0, -0.02495936, 0.27945042]}
          rotation={[-Math.PI / 2, 0, -3.09374386]}
          scale={[0.00897108, 0.00790197, 0.00705805]}
        >
          <group
            name="899a3aa9743d4c84bf3df4e59d9f889afbx"
            position={[0, -0.00000752, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode001" position={[0, 0, 0.0000086]}>
              <group
                name="Legs_l"
                position={[0, 0, 0.00000479]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100.00000763, 99.99998474, 99.99999237]}
              >
                <mesh
                  name="Legs_l_Wood_chair_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Legs_l_Wood_chair_1_0.geometry}
                  material={materials.Wood_chair_1}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Mesa"
          castShadow
          receiveShadow
          geometry={nodes.Mesa.geometry}
          material={materials["Desk18.0"]}
          position={[-0.04176974, -0.03881673, -1.42655468]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.81272548, 1, 1]}
        />
      </group>
    </group>
  )

}

useGLTF.preload("/3dModels/portifolio-Matheus-animacao.glb");
