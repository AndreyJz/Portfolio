import React from 'react';
import './SocialMediaMarquee.css';
import * as Icons from '../../../../public/items-carrousel/technologies.jsx';

// Crear el array de íconos usando los componentes importados
const programmingIcons = [
    { component: <Icons.JavaIcon />, href: '#' },
    { component: <Icons.JavaIcon />, href: '#' },
    { component: <Icons.PythonIcon/> , href: '#'},
    { component: <Icons.JavaIcon />, href: '#' },
    { component: <Icons.SpringBootIcon/> , href: '#'},
    { component: <Icons.PostgreSQLIcon/> , href: '#'},
    { component: <Icons.MySQLIcon/> , href: '#'},
    { component: <Icons.GitIcon/> , href: '#'},
    { component: <Icons.PythonIcon/> , href: '#'},
    { component: <Icons.JavaIcon />, href: '#' },
    { component: <Icons.SpringBootIcon/> , href: '#'},
    { component: <Icons.PostgreSQLIcon/> , href: '#'},
    { component: <Icons.MySQLIcon/> , href: '#'}
];

const programmingIcons2 = [
    { component: <Icons.LitIcon/> , href: '#'},
    { component: <Icons.ReactIcon/> , href: '#'},
    { component: <Icons.TypeScriptIcon/> , href: '#'},
    { component: <Icons.JavaScriptIcon/> , href: '#'},
    { component: <Icons.TailwindIcon/> , href: '#'},
    { component: <Icons.HTMLIcon/> , href: '#'},
    { component: <Icons.CSSIcon/> , href: '#'},
    { component: <Icons.LitIcon/> , href: '#'},
    { component: <Icons.ReactIcon/> , href: '#'},
    { component: <Icons.TypeScriptIcon/> , href: '#'},
    { component: <Icons.JavaScriptIcon/> , href: '#'},
    { component: <Icons.TailwindIcon/> , href: '#'}
];

const SocialMediaMarquee = () => {
    return (
        <div className="content">
            <div className="benefits">
                <div className="basic-marquee basic-marquee-1">
                    {programmingIcons.map((icon, index) => (
                        <a key={`icon-1-${index}`} className="programming-link" href={icon.href}>
                            <button className="button">
                                {icon.component}
                            </button>
                        </a>
                    ))}
                </div>
                <div className="basic-marquee basic-marquee-2">
                    {programmingIcons2.map((icon, index) => (
                        <a key={`icon-2-${index}`} className="programming-link" href={icon.href}>
                            <button className="button">
                                {icon.component}
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaMarquee;
