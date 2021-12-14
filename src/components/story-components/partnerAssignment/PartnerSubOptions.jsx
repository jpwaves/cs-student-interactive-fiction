import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const profScenario = `Too late to go to talk to the professor in their office hours and didn't get help. Now you have to grind out your assignment before it's due or you'll have to turn it in late.`;

const ohScenario = `Too late to go to office hours and didn't get help. Now you have to grind out your assignment before it's due or you'll have to turn it in late.`;

export default function PartnerSubOptions(props) {
    const { updateScenario, usedProf, setPartnerOption } = props;
    const title = "First Partner Assignment Pt. 2";
    const scenario = usedProf ? profScenario : ohScenario;

    const options = [
        {
            path: "Stay up and work on the homework",
            handleOption: () => {
                updateScenario(8);
            }
        },
        {
            path: "Sleep",
            handleOption: () => {
                updateScenario(8);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
