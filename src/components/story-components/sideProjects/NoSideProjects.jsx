import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function NoSideProjects(props) {
    const { updateScenario, updateTM } = props;
    const title = "No Side Projects";
    const scenario = `Alright, that's fine for now... but you should probably do side projects once you do have free time. Maybe over the break?`;

    const options = [
        {
            path: "Continue",
            handleOption: () => {
                updateScenario(11);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
