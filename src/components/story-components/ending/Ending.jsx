import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function Ending(props) {
    const { updateScenario, grade, calcGrade } = props;
    const title = "Your final grade";
    const scenario = `Your final grade at the end of the semester is a ${grade.toFixed(2)}% (${calcGrade(grade)}). I hope you enjoyed playing this interactive fiction! If you want to try going down a different path, click the "Play Again" button below.`;

    const options = [
        {
            path: "Play Again?",
            handleOption: () => {
                updateScenario(0);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
