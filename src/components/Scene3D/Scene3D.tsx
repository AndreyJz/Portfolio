import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useState } from 'react';
import Model3D from '../Model3D/Model3D';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Character3D from '../../assets/MeCopy.glb'

export default function Scene3D() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div style={{ position: 'relative', width: '25em', height: '25em' }}>
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[5, 0, 3]} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                    />

                    <Model3D
                        url={Character3D}
                        scale={0.7}
                        position={[0, -1.6, 1.6]}
                        visible={isVisible}
                        onClick={() => setIsVisible(false)}
                    />

                    <Environment preset="city" />
                    <ambientLight intensity={0.1} />
                    <directionalLight position={[10, 10, 5]} intensity={0.2} />
                </Suspense>
            </Canvas>
        </div>
    );
}