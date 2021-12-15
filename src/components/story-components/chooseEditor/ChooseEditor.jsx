import intellij from "../../../assets/intellij.png";
import notepad from "../../../assets/notepad.png";
import pythonIdle from "../../../assets/python-idle.png";
import vim from "../../../assets/vim.png";
import vscode from "../../../assets/vscode.png";
import xcode from "../../../assets/xcode.png";

import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function ChooseEditor(props) {
    const { updateScenario, updateTM, setEditorIcon } = props;
    const title = "Choose an Editor";
    const scenario = `Now that you have a laptop, you need to figure out what
        editor you are going to use to do your coding on. Like laptops, there are
        many options available. Here are some common options:`;

    // icons for each editor in top left corner
    const options = [
        {
            path: "Native Language IDE",
            handleOption: () => {
                const n = Math.floor(Math.random() * 100);
                if (n > 66) {
                    setEditorIcon(intellij);
                } else if (n > 33) {
                    setEditorIcon(pythonIdle);
                } else {
                    setEditorIcon(xcode);
                }
                updateScenario(3);
            }
        },
        {
            path: "VS Code",
            handleOption: () => {
                setEditorIcon(vscode);
                updateTM(Math.floor(Math.random() * 100 + 1) > 95 ? 0.7 : 1);
                updateScenario(3);
            }
        },
        {
            path: "Notepad",
            handleOption: () => {
                setEditorIcon(notepad);
                updateTM(2);
                updateScenario(3);
            }
        },
        {
            path: "Vim",
            handleOption: () => {
                setEditorIcon(vim);
                Math.floor(Math.random() * 100) + 1 > 10 ? updateTM(2) : updateTM(1.1);
                updateScenario(3);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
