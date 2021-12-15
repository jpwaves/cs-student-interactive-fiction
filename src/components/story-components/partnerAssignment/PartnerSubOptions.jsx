import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const profScenario = `You were too late to go to talk with the professor in office hours and didn't end up getting any help. Now you have to grind out the assignment before it's due or you'll have to turn it in late. What will you do?`;

const ohScenario = `You were too late to go to office hours and didn't end up getting any help. Now you have to grind out the assignment before it's due or you'll have to turn it in late. What will you do?`;

export default function PartnerSubOptions(props) {
    const { updateScenario, usedProf, setResult, updateTM } = props;
    const title = "First Partner Assignment Pt. 2";
    const scenario = usedProf ? profScenario : ohScenario;

    const options = [
        {
            path: "Stay up and work on the homework",
            handleOption: () => {
                const n = Math.floor(Math.random() * 100 + 1);
                if (n > 60) {
                    setResult(usedProf ? 11 : 8);
                    updateTM(1.25);
                } else {
                    setResult(usedProf ? 10 : 7);
                    updateTM(0.75);
                }
                updateScenario(8);
            }
        },
        {
            path: "Sleep",
            handleOption: () => {
                const n = Math.floor(Math.random() * 100 + 1);
                if (n > 30) {
                    setResult(usedProf ? 11 : 8);
                    updateTM(1.4);
                } else {
                    setResult(usedProf ? 10 : 7);
                    updateTM(0.8);
                }
                updateScenario(8);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
