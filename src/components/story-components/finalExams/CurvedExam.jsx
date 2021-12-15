import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function CurvedExam(props) {
    const { updateScenario, updateGrade } = props;
    const title = "The Curve";
    const scenario = `Every student's savior, the curve. Luckily, everyone else didn't do well on the final exam and the professor generously curved the exam scores. Because of the curve, your grade improved!`;

    const options = [
        {
            path: "Continue",
            handleOption: () => {
                updateGrade(20);
                updateScenario(15);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
