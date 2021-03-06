import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function FinalAssignment(props) {
    const { updateScenario, setDocumentation } = props;
    const title = "Final Assignment";
    const scenario = `The semester is coming to a close and you're doing the last assignment of the semester. However, since it's the last assignment you're feeling a little lazy about finishing it. Normally, your classes require to do thorough documentation of your code (purpose statements, explanations of complex code blocks, etc.), but it's the end of the semester and adding all that documentation is a lot of work. What will you do for this final assignment?`;

    const options = [
        {
            path: "Add documentation",
            handleOption: () => {
                setDocumentation(true);
                updateScenario(12);
            }
        },
        {
            path: "Skip documentation",
            handleOption: () => {
                setDocumentation(false);
                updateScenario(12);
            }
        },
        {
            path: "Plagarize someone else's documentation",
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
