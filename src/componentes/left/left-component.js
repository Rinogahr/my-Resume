import React from "react";
import LeftStyle from '../left/left-component.module.css'


function LeftComponent (){
    return(
        <div className={LeftStyle.containerLeft}>Lado esquerdo </div>
    );
}

export { LeftComponent }