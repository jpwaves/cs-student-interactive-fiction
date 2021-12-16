import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function PartTimeJob(props) {
    const { updateScenario, updateTM } = props;
    const title = "Get a Part-time Job?";
    const scenario = `Like any college student, money is limited. This could be partially solved by getting a part-time job. However, this will cut into time that could be used for doing coursework. Will you choose to get a part-time job`;

    const options = [
        {
            path: "Yes",
            handleOption: () => {
                console.log("add parttimer icon on side, add 2 to time mult");
                updateTM(1.5);
                updateScenario(4);
            }
        },
        {
            path: "No",
            handleOption: () => {
                updateScenario(4);
            }
        },
        {
            path: "Switch majors",
            handleOption: () => {
                updateScenario(18);
            }
        },
        {
            path: "Drop out of college",
            handleOption: () => {
                updateScenario(19);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
