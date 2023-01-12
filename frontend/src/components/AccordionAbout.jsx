import React from "react";
import { useState } from "react";

//------CREATION DES VOLETS DEPLIANTS DE LA PAGE "ABOUT"-----// 
function CollapsibleAccordion(props) {

    /* Activation ou désactivation des "Collapse" */
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }

    return (
        <article className="accordion">
            <div className="accordion__title" onClick={handleClick}>
                <h2>{props.title}</h2>
                {active ? <span className="material-symbols-outlined">expand_less</span> :
                <span className="material-symbols-outlined">expand_more</span>}
            </div>
            {active && <div className="accordion__content">
                <p>{props.content}</p>
            </div>}
        </article>
    )    
}

export default CollapsibleAccordion;