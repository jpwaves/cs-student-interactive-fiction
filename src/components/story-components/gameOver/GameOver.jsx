import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function GameOver(props) {
    const { updateScenario } = props;
    const title = "You Failed!";
    const scenario = "Unfortunately, you failed to finish semester. Maybe you'll have better luck next next semester?";

    const options = [
        {
            path: "Try Again?",
            handleOption: () => {
                updateScenario(0);
            },
        }
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
