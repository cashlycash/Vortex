import React, { Suspense } from "react";
import { useRef} from "react";
import { Canvas } from "react-three-fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "../css/home.css";

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group position={[0, -1.52, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.TAPA_1_TAPA_1_0.geometry} material={materials.TAPA_1} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_15_MOUSE_15_0.geometry} material={materials.MOUSE_15} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.RUEDA_3_RUEDA_3_0.geometry} material={materials.RUEDA_3} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.RUEDA_2_RUEDA_2_0.geometry} material={materials.RUEDA_2} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_13_MOUSE_13_0.geometry} material={materials.MOUSE_13} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_12_MOUSE_12_0.geometry} material={materials.MOUSE_12} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Extract2_Extract2_0.geometry} material={materials.Extract2} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_9_MOUSE_9_0.geometry} material={materials.MOUSE_9} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_7_MOUSE_7_0.geometry} material={materials.MOUSE_7} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_8_MOUSE_8_0.geometry} material={materials.MOUSE_8} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MOUSE_6_MOUSE_6_0.geometry} material={materials.MOUSE_6} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.BTN_1_1_BTN_1_1_0.geometry} material={materials.BTN_1_1} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.BTN_2_1_BTN_2_1_0.geometry} material={materials.BTN_2_1} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default function App() {
  const ref= useRef()
  return(
<div className="home-container">
  <div className="banner">
<Canvas ref={ref} style={{background: "#23232e" }}>
   <Suspense fallback={null}>
    <ambientLight />
    <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />
    <Model />
    <OrbitControls enableRotate={true} />
   </Suspense>
</Canvas>
<div className="info">
  <b>Vortex Technologies</b>
  <p>Gaming Redefined</p>
</div>
</div>
</div>
)};