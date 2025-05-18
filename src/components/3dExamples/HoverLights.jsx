import * as THREE from "three";
import {Environment} from "@react-three/drei";

const HoverLights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow={1}
                shadow-mapSize={[1024, 1024]}
            />
            <spotLight
                position={[-10, 10, 5]}
                intensity={0.8}
                angle={0.5}
                penumbra={0.5}
            />

            {/* Option 2: Environment lighting (important for PBR materials) */}
            <Environment preset="city" />
        </>
    )
}
export default HoverLights
