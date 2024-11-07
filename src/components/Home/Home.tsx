import './Home.css';
import { useState } from "react";
import Character from "../Character/Character.tsx";
import Scene3D from "../Scene3D/Scene3D.tsx";
import SocialMediaMarquee from "../Carrousel/Vertical/SocialMediaMarquee.tsx";
import "../Carrousel/Horizontal/ProjectsCarrousel.css"
import { FaGithub, FaJava, FaReact, FaStripe } from "react-icons/fa";
import { CgScreenWide } from "react-icons/cg";
import {
    SiAdobephotoshop,
    SiJsonwebtokens,
    SiVite,
    SiLit,
    SiTailwindcss,
    SiApachetomcat,
    SiNetlify,
    SiBlender, SiTypescript, SiThreedotjs
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot, BiLogoTypescript, BiSolidData } from "react-icons/bi";
import Me from '../../assets/me1.jpeg';
import Violin from '../../assets/foto-violin1.jpeg';
import Cv from '../../../public/Andrey Jerez Rubio - 2024-10-31 - CVE - Con contacto.pdf';

function Home() {
    const [isModelVisible, setIsModelVisible] = useState(true);
    const [currentSection, setCurrentSection] = useState(0);

    const changeSection = (direction: 'next' | 'prev'): boolean => {
        if (direction === 'next' && currentSection < 5) {
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
            <div
                className="horizontal-container"
                style={{
                    transform: `translateX(-${currentSection * 100}vw)`
                }}
            >
                <div className="container home">
                    {/*<p className="hint">Click the 3D model to start your trip!</p>*/}
                    <div className="3D-Model" onClick={() => setIsModelVisible(false)}>
                        <Scene3D />
                    </div>
                    <div className="right-container">
                        <div className="normal-title">
                            <h1>Hi! I'm Andrey, a</h1>
                            <h1>Full Stack Developer</h1>
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

                                            <button className="copy_toggle" type="button">
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
            {!isModelVisible ? <code className="cmd" data-cmd="Press the KeyBoard Arrows!"></code> :
                <code className="cmd" data-cmd="Click the 3D Model!"></code>}
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
                                    <a href={Cv} target={"_blank"} style={{color: "black"}}>
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
                                    </a>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container about-me">
                    <div className="top-section">
                        <div className="About">
                            <h1>About Me</h1>
                            <p className="Description">Soy Andrey, un creativo, activo y apasionado Desarrollador de
                                Software que le encanta seguir aprendiendo y evolucionando a medida que trabaja. Mi
                                nivel de Ingles y capacidad de indagar en soluciones creativas a problemas y aplicarlas
                                efectivamente, de adaptarme con facilidad a nuevas tecnologías y recursos; y siempre
                                dedicarle el 100% a lo que hago, me han ayudado a abordar efectivamente distintos
                                proyectos. Mis Soft-Skills como la comunicación y escucha activa me facilitan el trabajo
                                en equipo y la capacidad de tomar la iniciativa.</p>
                        </div>
                        <img className="photo-container" src={Me} alt={"foto"}/>
                    </div>
                    <div className="bottom-section">
                        <img className="photo-container" src={Violin} alt={"foto"}/>
                        <div className="About">
                            <h1>Objetives</h1>
                            <p className="Description">Mi ambición es convertirme en un experto desarrollador de
                                software, ser parte de avances tecnológicos importantes y hacer algo que ayude a los
                                demás, usando la innovación y el trabajo en equipo. Mi meta personal es encontrar el
                                equilibrio entre el trabajo y mis intereses personales, ya que me encanta disfrutar de
                                mis hobbies como el Violin y el Baloncesto.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <p><span><div className="zzz">
                            <a>-/ Mission /-</a>
                            <a className="span-info">Desarrollo soluciones Fullstack innovadoras que combinan creatividad y una experiencia de usuario efectiva, ayudando a individuos y empresas a impulsar su crecimiento tecnológico. Con un enfoque en el compañerismo y el compromiso, entrego productos de alta calidad en tiempos óptimos, destacándome por mi capacidad de trabajo en equipo y mi constante reinvención.</a>
                        </div></span></p>
                        <p><span><div className="zzz">
                            <a>-/ Vision /-</a>
                            <a className="span-info">Ser un referente en el desarrollo Fullstack, liderando proyectos innovadores que impulsen el crecimiento tecnológico de empresas y emprendedores. Ofrecer soluciones avanzadas y creativas, adaptadas a las nuevas tecnologías, manteniendo la calidad y compromiso en cada proyecto.</a>
                        </div></span></p>
                        <p><span><div className="zzz">
                            <a>-/ Values /-</a>
                            <a className="span-info" style={{ textAlign: "left", width: "max-content" }}>* Aprendizaje continuo <br/> * Servicio <br/> * Pasión por la tecnología <br/> * Escalabilidad </a>
                        </div></span></p>
                    </div>
                </div>
                <div className="container service">
                    <div className="services">
                        <div className="normal-title">
                            <h1>Services</h1>
                        </div>
                        <div className="service-list">
                            <div className="tarjeta">
                                <div className="tools">
                                    <div className="circle">
                                        <span className="red box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green box"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <h1>Desarrollo Web</h1>
                                    <p>Creación de aplicaciones web personalizadas</p>
                                </div>
                            </div>
                            <div className="tarjeta">
                                <div className="tools">
                                    <div className="circle">
                                        <span className="red box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green box"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <h1>Bases de Datos</h1>
                                    <p>Optimización y mantenimiento de bases de datos para una mejora del rendimiento.</p>
                                </div>
                            </div>
                            <div className="tarjeta">
                                <div className="tools">
                                    <div className="circle">
                                        <span className="red box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow box"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green box"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <h1>Desarrollo Personalizado</h1>
                                    <p>Desarrollo de soluciones de software a medida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <div className="normal-title">
                            <h1>Skills</h1>
                        </div>
                        <SocialMediaMarquee/>
                    </div>
                </div>
                <div className="container project">
                    <div className="normal-title" style={{ marginTop: '1em', fontSize: '1.3em' }}>
                        <h1>Projects</h1>
                    </div>
                    <div className="container-carrousel">
                        <div className="carousel">
                            <div className="carousel__face"><div className="info-projects">
                                <div className="info-projects-icon">
                                    <h1>JSA Service Managers</h1>
                                    <div className="icons">
                                        <BiLogoSpringBoot></BiLogoSpringBoot>
                                        <SiJsonwebtokens></SiJsonwebtokens>
                                        <SiApachetomcat></SiApachetomcat>
                                        <FaReact></FaReact>
                                        <BiLogoTypescript></BiLogoTypescript>
                                        <SiTailwindcss></SiTailwindcss>
                                        <SiVite></SiVite>
                                        <GrMysql></GrMysql>
                                        <FaStripe></FaStripe>
                                    </div>
                                    <a href="https://github.com/simonmantillago/JSA-EnterpriseManager" target="_blank">
                                        <FaGithub></FaGithub>
                                    </a>
                                </div>
                                <p>Pagina web enfocada a la venta y gestión de servicios de empresas, permite gestión de personal.</p>
                            </div></div>
                            <div className="carousel__face">
                                <div className="info-projects">
                                    <div className="info-projects-icon">
                                        <h1>Pepita Confections</h1>
                                        <div className="icons">
                                            <SiLit></SiLit>
                                            <SiVite></SiVite>
                                            <BiSolidData></BiSolidData>
                                            <SiNetlify></SiNetlify>
                                        </div>
                                        <div className="info-projects-links">
                                            <a href="https://pepitaconfections.netlify.app" target="_blank">
                                                <CgScreenWide></CgScreenWide>
                                            </a>
                                            <a href="https://github.com/simonmantillago/pepita-confections-project"
                                               target="_blank">
                                                <FaGithub></FaGithub>
                                            </a>
                                        </div>
                                    </div>
                                    <p>Aplicación web que permite manejar la producción de todos sus productos.</p>
                                </div>
                            </div>
                            <div className="carousel__face">
                                <div className="info-projects">
                                    <div className="info-projects-icon">
                                        <h1>Ultimate Pharmacy</h1>
                                        <div className="icons">
                                            <FaJava></FaJava>
                                            <GrMysql></GrMysql>
                                        </div>
                                        <a href="https://github.com/AndreyJz/Ultimate-Pharmacy" target="_blank">
                                            <FaGithub></FaGithub>
                                        </a>
                                    </div>

                                    <p>Aplicación en Java Swing para la gestión de una Farmacia.</p>
                                </div>
                            </div>
                            <div className="carousel__face">
                            <div className="info-projects">
                                <div className="info-projects-icon">
                                    <h1>Forum Surveys</h1>
                                    <div className="icons">
                                        <FaJava></FaJava>
                                        <GrMysql></GrMysql>
                                    </div>
                                    <a href="https://github.com/AndreyJz/SurveysJAVA" target="_blank">
                                        <FaGithub></FaGithub>
                                    </a>
                                </div>
                                <p>Aplicación en Java Swing para gestionar de encuestas y responder las mismas.</p>
                            </div>
                            </div>
                            <div className="carousel__face">
                                <div className="info-projects">
                                    <div className="info-projects-icon">
                                        <h1>Portfolio Web</h1>
                                        <div className="icons">
                                            <FaReact></FaReact>
                                            <SiTypescript></SiTypescript>
                                            <SiThreedotjs></SiThreedotjs>
                                            <SiBlender></SiBlender>
                                            <SiAdobephotoshop></SiAdobephotoshop>
                                            <SiVite></SiVite>
                                            <SiNetlify></SiNetlify>
                                        </div>
                                        <div className="info-projects-links">
                                            <a href="" target="_self">
                                                <CgScreenWide></CgScreenWide>
                                            </a>
                                            <a href="https://github.com/AndreyJz/Portfolio" target="_blank">
                                                <FaGithub></FaGithub>
                                            </a>
                                        </div>
                                    </div>
                                    <p>Portafolio web personal que permite exhibir al publico el perfil de Andrey Jerez.
                                        ^-^</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container project">
                    <div className="normal-title" style={{margin: '5rem 0 3rem 0', fontSize: '1.5vi', paddingLeft: '0'}}>
                        <h1>Contact Me!</h1>
                    </div>
                    <div className="social-login-icons">
                        <div className="socialcontainer">
                            <div className="icon social-icon-1-1">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="2.5vi"
                                     viewBox="0 0 50 50">
                                    <path
                                        d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                </svg>
                            </div>
                            <div className="social-icon-1">
                                <a href="mailto:jerez.01.18@gmail.com?subject=Consulta&body=Hola,%20quisiera%20saber%20más%20sobre%20tus%20servicios." target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="2.6vi"
                                         viewBox="0 0 50 50">
                                        <path
                                            d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="socialcontainer">
                            <div className="icon social-icon-2-2">
                                <svg
                                    fill="white"
                                    className="svgIcon"
                                    viewBox="0 0 448 512"
                                    height="2.5vi"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="social-icon-2">
                                <a href="https://www.instagram.com/andreyjz.35/" target="_blank">
                                    <svg
                                        fill="white"
                                        className="svgIcon"
                                        viewBox="0 0 448 512"
                                        height="2.6vi"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="socialcontainer">
                            <div className="icon social-icon-3-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="2.5vi"
                                     viewBox="0 0 50 50">
                                    <path
                                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                            <div className="social-icon-3">
                                <a href="https://www.linkedin.com/in/andrey-jerez-rubio/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="2.6vi"
                                         viewBox="0 0 50 50">
                                        <path
                                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="socialcontainer">
                            <div className="icon social-icon-4-4">
                                <svg fill="white" viewBox="0 0 496 512" height="2.5vi">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="social-icon-4">
                                <a href="https://github.com/AndreyJz" target="_blank">
                                    <svg fill="white" viewBox="0 0 496 512" height="2.6vi">
                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!isModelVisible && <Character changeSection={changeSection}/>}
        </>
    );
}

export default Home;