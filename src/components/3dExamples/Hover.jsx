import {Canvas} from "@react-three/fiber";

import React from 'react'
import {HoverCar} from "./HoverCar.jsx";
import HoverLights from "./HoverLights.jsx";
import {Float, OrbitControls, Environment, Stage, PerspectiveCamera} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";


const Hover = () => {

    return (
        <Canvas shadows camera={{ position: [0, 0, 25], fov: 50}}>


            <OrbitControls
                enablePan={false}
                maxDistance={30}
                minDistance={10}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 1}
                maxAzimuthAngle={Math.PI / 4}
            />

            <HoverLights />

            <Float speed={10} rotationIntensity={0.5} floatIntensity={4}>
            <group
                scale={ 4 }
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
            <HoverCar />
            </group>
            </Float>
        </Canvas>
    )
}
export default Hover
