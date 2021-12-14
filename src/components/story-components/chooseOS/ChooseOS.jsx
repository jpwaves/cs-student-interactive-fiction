import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function ChooseOS(props) {
    const { updateScenario, updateTM } = props;
    const title = "Choose an Editor";
    const scenario = `Now that you have a laptop, you need to figure out what
        editor you are going to use to do your coding on. Like laptops, there are
        many options available. Here are some common options:`;

    const options = [
        {
            path: "Native Language IDE",
            handleOption: () => {
                console.log("add random native lang ide, make time mult 1");
                updateTM(1);
                updateScenario(3);
            }
        },
        {
            path: "VS Code",
            handleOption: () => {
                console.log("add vscode icon in corner, make time mult 1");
                updateTM(1);
                updateScenario(3);
            }
        },
        {
            path: "Notepad",
            handleOption: () => {
                console.log("add notepad icon, make time mult 3");
                updateTM(3);
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
