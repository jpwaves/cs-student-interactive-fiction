import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function ChooseEditor(props) {
    const { updateScenario, updateTM } = props;
    const title = "Choose an Editor";
    const scenario = `Now that you have a laptop, you need to figure out what
        editor you are going to use to do your coding on. Like laptops, there are
        many options available. Here are some common options:`;

    // icons for each editor in top left corner
    const options = [
        {
            path: "Native Language IDE",
            handleOption: () => {
                updateScenario(3);
            }
        },
        {
            path: "VS Code",
            handleOption: () => {
                updateTM(Math.floor(Math.random() * 100 + 1) > 95 ? 0.7 : 1);
                updateScenario(3);
            }
        },
        {
            path: "Notepad",
            handleOption: () => {
                updateTM(2);
                updateScenario(3);
            }
        },
        {
            path: "Vim",
            handleOption: () => {
                console.log("add vim icon, make time mult 2 but random chance the mult to be 1.1 on 10/90");
                Math.floor(Math.random() * 100) + 1 > 10 ? updateTM(2) : updateTM(1.1);
                updateScenario(3);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
