import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

const determineTitle = (grade) => {
    if (grade >= 90) {
        return "You're a CS WIZ (or really lucky)!";
    } else if (grade >= 80) {
        return "Nice, you passed...";
    } else if (grade >= 70) {
        return "Rough semester... get'em next time?";
    } else if (grade >= 60) {
        return "You Failed :(";
    } else {
        return "F IS FOR FAILURE";
    }
}

export default function Ending(props) {
    const { updateScenario, grade, calcGrade } = props;
    const title = determineTitle(grade);
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
