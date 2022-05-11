import React from "react";
import TitleStyle from '../title/title-component.module.css';

function TitleComponent ({header, subheader}){
    return(
        <div className={TitleStyle.containerTitle}>
            <div> {header} </div>
            <div> {subheader} </div>
        </div>
    );
}

export { TitleComponent }