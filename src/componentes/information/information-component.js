import React from "react";
import InfoStyle from '../information/information-component.module.css';



function InformationComponent ({infoIcon, InfoText, infoTitle, infoLabel, infoSubTitle}){
    return(
        <div className={InfoStyle.containerInfo}>
            <div className={InfoStyle.containerInfoChildren1}>
                <div className={InfoStyle.infoIcon}>
                    <div>
                        {infoIcon}
                    </div>
                    <div>
                        {infoTitle}
                    </div>
                    <div>
                        <b>___________________________________________________________</b>
                    </div>
                </div>
                <div className={InfoStyle.infoBox}>
                    {InfoText}
                </div>
            </div>
        </div>
    );
}

export { InformationComponent }