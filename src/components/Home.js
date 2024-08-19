import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="container">
            <h2><FontAwesomeIcon icon={faHome} /> Introducción al Proyecto</h2>
            <p>
                [Aquí puedes poner la introducción general al proyecto según la información del PDF.]
            </p>
        </div>
    );
};

export default Home;
