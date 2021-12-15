import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function FinalAssignment(props) {
    const { updateScenario, setDocumentation } = props;
    const title = "First Partner Assignment";
    const scenario = `Today, your CS class has just assigned the first of six partner assignments. The assignment is due in a week. You were given the contact information of your partner.`;

    const options = [
        {
            path: "Add documentation",
            handleOption: () => {
                console.log("nav to options for time");
                setDocumentation(true);
                updateScenario(12);
            }
        },
        {
            path: "Skip documentation",
            handleOption: () => {
                console.log("nav to optiosn w/o time");
                setDocumentation(false);
                updateScenario(12);
            }
        },
        {
            path: "Plagarize someone else's documentation",
            handleOption: () => {
                console.log("nav to optiosn w/o time");
                updateScenario(16);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
