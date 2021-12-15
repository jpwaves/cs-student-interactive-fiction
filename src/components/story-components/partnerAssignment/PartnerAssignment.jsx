import React from "react";
import Scenario from "../../page-components/scenario/Scenario";

export default function PartnerAssignment(props) {
    const { updateScenario, setStartEarly } = props;
    const title = "First Partner Assignment";
    const scenario = `Today, your CS class has just assigned the first of six partner assignments. The assignment is due in a week. You were given the contact information of your partner.`;

    const options = [
        {
            path: "Contact them now",
            handleOption: () => {
                setStartEarly(true);
                updateScenario(6);
            }
        },
        {
            path: "Wait until later",
            handleOption: () => {
                setStartEarly(false);
                updateScenario(6);
            }
        },
    ];

    return <Scenario title={title} desc={scenario} options={options} />;
}
