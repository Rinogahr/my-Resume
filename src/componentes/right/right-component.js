import React from "react";
import RightStyle from '../right/right-component.module.css';
import { TitleComponent } from '../title/title-component';
import { InformationComponent } from '../information/information-component';
import { BiUser } from "react-icons/bi";
import { BiDesktop } from "react-icons/bi";

function RightComponent (){
    return(
        <div className={RightStyle.containerRight}>
            <TitleComponent 
                header="Rodrigo Pedro Maciel"
                subheader="Jr Web Developer"/> 
            <InformationComponent
            infoIcon={<BiUser/>}
            infoTitle="Profile"
            InfoText=
                {
                    `Programador com mais de 5 anos de experiência trabalhando na indústria de gestão escolar.
                    Especializado em Node.Js, JavaScript, Angular.js, React.js, React Native,
                    HTML, CSS, SQL, Figma, Pacote Office, Jquery , PHP, Laravel, Gith, GitHub, TypeScript,
                    XAMP & WAMP server`
                }
            />
            <InformationComponent
            infoIcon={<BiDesktop/>}
            infoTitle="Work Experience"
            infoLabel={false}
            infoLabelText="NTDSOFT"
            />
        </div>
    );
}

export { RightComponent }