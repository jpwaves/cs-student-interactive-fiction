import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function FinalExams(props) {
    const { updateScenario, updateGrade } = props;
    const title = "Final Exams";
    const scenario = `It's final exams week! Your final exam is coming up in 3 days, so it's now or never! What will you do?`;

    const options = [
        {
            path: "Study for finals",
            handleOption: () => {
                updateGrade(Math.random() * 7 - 3);
                updateScenario(Math.floor(Math.random() * 100 + 1) > 95 ? 14 : 15);
            }
        },
        {
            path: "Procrastinate studying",
            handleOption: () => {
                updateScenario(Math.floor(Math.random() * 100 + 1) > 80 ? 14 : 15);
            }
        },
        {
            path: "Cheat during the exam",
            handleOption: () => {
                updateScenario(16);
            }
        },
        {
            path: "Switch majors",
            handleOption: () => {
                updateScenario(18);
            }
        },
        {
            path: "Drop out of college",
            handleOption: () => {
                updateScenario(19);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
