import { 
    PresentationControls, 
    Stage, 
    MeshReflectorMaterial, 
} from "@react-three/drei";
import Chair from "./Chair";
import { Suspense } from "react";

const Experience = () => {  

    return (
        <PresentationControls 
            speed={1.5} 
            global 
            zoom={0.7} 
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
            <Stage environment={"city"} intensity={0.6} contactShadow={false}>
                <Chair />
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0, 0]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>
    );
};
export default Experience;