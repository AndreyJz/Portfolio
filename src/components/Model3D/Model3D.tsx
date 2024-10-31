import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, Vector3 } from 'three';
import { useSpring, animated } from '@react-spring/three';

interface Model3DProps {
    url: string;
    scale?: number;
    position?: [number, number, number];
    onPointerOver?: () => void;
    onPointerOut?: () => void;
    onClick?: () => void;
    visible: boolean;
}

export default function Model3D({
                                    url,
                                    scale = 1,
                                    position = [0, 0, 0],
                                    onPointerOver,
                                    onPointerOut,
                                    onClick,
                                    visible
                                }: Model3DProps) {
    const mesh = useRef<Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Load the 3D model
    const gltf = useLoader(GLTFLoader, url);

    // Floating animation
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;

            if (hovered) {
                const targetRotation = new Vector3(
                    0,
                    mousePosition.x * Math.PI * 0.07,
                    0
                );
                mesh.current.rotation.y += (targetRotation.y - mesh.current.rotation.y) * 0.2;
            }
        }
    });

    // Fade animation
    const springs = useSpring({
        opacity: visible ? 1 : 0,
        scale: visible ? scale : 0,
        config: { mass: 1, tension: 280, friction: 60 }
    });

    return (
        <animated.mesh
            ref={mesh}
            position={position}
            scale={springs.scale}
            onClick={(event) => {
                event.stopPropagation();
                onClick?.();
            }}
            onPointerOver={(event) => {
                event.stopPropagation();
                setHovered(true);
                onPointerOver?.();
            }}
            onPointerOut={(event) => {
                event.stopPropagation();
                setHovered(false);
                onPointerOut?.();
            }}
            onPointerMove={(event) => {
                const x = (event.clientX / window.innerWidth) * 2 - 1;
                const y = -(event.clientY / window.innerHeight) * 2 + 1;
                setMousePosition({ x, y });
            }}
        >
            <primitive
                object={gltf.scene}
                scale={scale}
                visible={springs.opacity.to((o) => o > 0.1)}
            />
        </animated.mesh>
    );
}