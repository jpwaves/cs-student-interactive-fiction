import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function PartTimeJob(props) {
    const { updateScenario, updateTM } = props;
    const title = "Choose an Editor";
    const scenario = `Now that you have a laptop, you need to figure out what
        editor you are going to use to do your coding on. Like laptops, there are
        many options available. Here are some common options:`;

    const options = [
        {
            path: "Yes",
            handleOption: () => {
                console.log("add parttimer icon on side, add 2 to time mult");
                updateTM(2);
                updateScenario(4);
            }
        },
        {
            path: "No",
            handleOption: () => {
                console.log("do nothing, go to next scene");
                updateScenario(4);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
