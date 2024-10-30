import React, { useEffect, useRef, useState } from 'react';
import './Character.css';
import CharacterRightGif from '../../assets/my_character.gif';
import CharacterLeftGif from '../../assets/my_character_left.gif';

interface CharacterProps {
    changeSection: (direction: 'next' | 'prev') => void; // Prop para cambiar la sección
}

const Character: React.FC<CharacterProps> = ({ changeSection }) => {
    const characterRef = useRef<HTMLImageElement | null>(null);
    const speed = 140;
    const [image, setImage] = useState(CharacterRightGif);
    const [position, setPosition] = useState(0); // Estado para la posición horizontal del personaje
    const [isFading, setIsFading] = useState(false); // Controla el desvanecimiento

    const moveCharacter = (direction: string) => {
        if (characterRef.current) {
            const screenWidth = window.innerWidth - characterRef.current.offsetWidth;

            if (direction === 'right') {
                setImage(CharacterRightGif);
                if (position + speed < screenWidth) {
                    setPosition(position + speed);
                } else {
                    const isEdging: boolean = changeSection('next');
                    if (isEdging) {
                        setIsFading(true);
                        setTimeout(() => {
                            setIsFading(false); // Quita el desvanecimiento
                            setPosition(25);
                        }, 2000);
                    }
                }
            } else if (direction === 'left') {
                setImage(CharacterLeftGif);
                if (position - speed > 0) {
                    setPosition(position - speed);
                } else {
                    const isEdging: boolean = changeSection('prev');
                    if (isEdging) {
                        setIsFading(true);
                        setTimeout(() => {
                            setPosition(screenWidth - 50);
                            setIsFading(false);
                        }, 2000);
                    }
                }
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'd') {
            moveCharacter('right');
        } else if (e.key === 'ArrowLeft' || e.key === 'a') {
            moveCharacter('left');
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [position]);

    return (
        <img
            className={`character ${isFading ? 'fading' : ''} ${position < 0 ? 'walking-left' : 'walking-right'}`}
            src={image}
            ref={characterRef}
            style={{
                left: `${position}px`,
                transform: position < 0 ? 'scaleX(-1)' : 'scaleX(1)',
                transition: 'left 0.4s ease' // Transición suave
            }}
        />
    );
};

export default Character;
