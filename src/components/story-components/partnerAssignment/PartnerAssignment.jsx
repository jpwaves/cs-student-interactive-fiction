import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function PartnerAssignment(props) {
    const { updateScenario, setStartEarly, updateTM } = props;
    const title = "First Partner Assignment";
    const scenario = `Today, your CS class has just assigned the first of six partner assignments. The assignment is due in a week. You were given the contact information of your partner.`;

    const options = [
        {
            path: "Contact them now",
            handleOption: () => {
                setStartEarly(true);
                updateTM(0.75);
                updateScenario(6);
            }
        },
        {
            path: "Wait until later",
            handleOption: () => {
                setStartEarly(false);
                updateTM(1.1);
                updateScenario(6);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
