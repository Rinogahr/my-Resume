import React from "react";
import RightStyle from '../right/right-component.module.css';
import { TitleComponent } from '../title/title-component';
import { InformationComponent } from '../information/information-component';
import { BiUser } from "react-icons/bi";

function RightComponent (){
    return(
        <div className={RightStyle.containerRight}>
            <TitleComponent 
                header="Rodrigo Pedro Maciel"
                subheader="Web Developer"/> 
            <InformationComponent
            infoIcon={<BiUser/>}
            infoTitle="Profile"
            />
            <InformationComponent/>
        </div>
    );
}

export { RightComponent }