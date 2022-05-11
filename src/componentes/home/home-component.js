import React from "react";
import homeStyle from '../home/home-component.module.css';
import { LeftComponent } from '../left/left-component';
import { RightComponent } from '../right/right-component';





function HomeComponent(){
    return(
        <div className={homeStyle.container}>
            <LeftComponent/>   
            <RightComponent/>  
        </div>
    );
}

export {HomeComponent}