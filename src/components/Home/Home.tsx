import './Home.css';
import { useState } from "react";
import Character from "../Character/Character.tsx";
import Scene3D from "../Scene3D/Scene3D.tsx";

function Home() {
    const [isModelVisible, setIsModelVisible] = useState(true);
    const [currentSection, setCurrentSection] = useState(0);

    const changeSection = (direction: 'next' | 'prev'): boolean => {
        if (direction === 'next' && currentSection < 2) {
            setCurrentSection(currentSection + 1);
            return true;
        } else if (direction === 'prev' && currentSection > 0) {
            setCurrentSection(currentSection - 1);
            return true;
        }
        return false;
    };

    return (
        <>
            {!isModelVisible && <Character changeSection={changeSection} />}
            <div
                className="horizontal-container"
                style={{
                    transform: `translateX(-${currentSection * 100}vw)`
                }}
            >
                <div className="container home">
                    <div className="3D-Model" onClick={() => setIsModelVisible(false)}>
                        <Scene3D />
                    </div>
                    <div className="right-container">
                        <div className="content">
                            <h1>Full-Stack Developer</h1>
                        </div>
                        <div className="info">

                            <div className="card">
                                <div className="wrap">
                                    <div className="terminal">
                                        <hgroup className="head">
                                            <p className="title">
                                                <svg
                                                    width="16px"
                                                    height="16px"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                                    ></path>
                                                </svg>
                                                Terminal
                                            </p>

                                            <button className="copy_toggle" tabIndex="-1" type="button">
                                                <svg
                                                    width="16px"
                                                    height="16px"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                                                    ></path>
                                                    <path
                                                        d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </hgroup>

                                        <div className="body">
        <pre className="pre">          <code>-&nbsp;</code>
          <code>npx&nbsp;</code>
          <code className="cmd" data-cmd="Hi! I'm Andrey Jerez!"></code>
        </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="download-button">
                                <div className="docs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="css-i6dzq1"
                                    >
                                        <path
                                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                        ></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    Cv
                                </div>
                                <div className="download">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="css-i6dzq1"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container about-me">
                    <div className="info">
                        <h1 className="title">Hi!</h1>
                        <h2 className="description">I'm Andrey</h2>
                        <h2 className="description">Junior Software Developer</h2>
                    </div>
                </div>
                <div className="container about-me"></div>
            </div>
        </>
    );
}

export default Home;