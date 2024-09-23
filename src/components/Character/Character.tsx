import React, {useEffect, useRef, useState} from 'react';
import './Character.css';
import CharacterRightGif from '../../assets/characterRightGif.gif'
import CharacterLeftGif from '../../assets/characterLeftGif.gif'
import CharacterRight from '../../assets/characterRight.png'
import CharacterLeft from '../../assets/characterLeft.png'

const Character: React.FC = () => {
    const characterRef = useRef<HTMLImageElement | null>(null); // Referencia al personaje
    const speed = 50;
    const [image, setImage] = useState(CharacterRightGif);

    const moveCharacter = (direction: string) => {
        if (characterRef.current) {
            const currentLeft = characterRef.current.offsetLeft;
            const screenWidth = window.innerWidth - characterRef.current.offsetWidth;

            if (direction === 'right' && currentLeft + speed <= screenWidth) {
                characterRef.current.style.left = `${currentLeft + speed}px`;
                console.log(currentLeft, speed);
                setImage(CharacterRightGif);
            } else if (direction === 'left' && currentLeft - speed >= 0) {
                characterRef.current.style.left = `${currentLeft - speed}px`;
                console.log(currentLeft, speed);

                setImage(CharacterLeftGif); // Cambia a GIF de movimiento hacia la izquierda
            }

            setTimeout(() => {
                if (direction === 'right') {
                    setImage(CharacterRight);
                } else if (direction === 'left') {
                    setImage(CharacterLeft);
                }
            }, 400);
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
    }, []);

    return <img className="character" src={image} ref={characterRef}></img>;
};

export default Character;
