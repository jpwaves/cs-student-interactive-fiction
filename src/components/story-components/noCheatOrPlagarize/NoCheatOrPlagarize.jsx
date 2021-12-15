import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function NoCheatOrPlagarize(props) {
    const { updateScenario } = props;
    const title = "Don't cheat/plagarize...";
    const scenario = "Don't cheat/plagarize.";

    const options = [
        {
            path: "Continue",
            handleOption: () => {
                updateScenario(17);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
